import {
  ConflictException,
  forwardRef,
  Inject,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  AuthCredentialsDto,
  CreateUserDto,
  UpdateUserAquariumTypeDto,
} from './user.dto';
import { WaterSampleService } from '../waterSamples/waterSample.service';
import { UserEntity } from './user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../shared/types/jwt-payloadTypes';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,

    private jwtService: JwtService,
    @Inject(forwardRef(() => WaterSampleService))
    private readonly waterSampleService: WaterSampleService,
  ) {}

  public async getUserByEmail(userEmail: string) {
    const user: UserEntity = await this.userRepository.findOneOrFail({
      where: { email: userEmail },
    });
    return user;
  }

  public async createUser(user: CreateUserDto): Promise<UserEntity> {
    const newUser: UserEntity = new UserEntity();
    newUser.email = user.email;
    newUser.firstName = user.firstName;
    newUser.lastName = user.lastName;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(user.password, salt);

    newUser.password = hashedPassword;

    const createdUser = this.userRepository.create({ ...newUser });
    try {
      return await this.userRepository.save(createdUser);
    } catch (error) {
      if (error.code === '23505')
        throw new ConflictException('Email is already in use');
      else {
        throw new InternalServerErrorException();
      }
    }
  }

  public async editAquariumType(updateAquariumType: UpdateUserAquariumTypeDto) {
    const currentUser = this.getUserByEmail(updateAquariumType.email);
    (await currentUser).aquariumType = updateAquariumType.aquariumType;
    return currentUser;
  }

  public async returnWaterRecommendations(email: string) {
    const currentUser = this.getUserByEmail(email);
    const usersWaterSamples = (await currentUser).waterResults;
    return this.waterSampleService.waterOptimisationAlgorithm(
      usersWaterSamples,
    );
  }

  public async signIn(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    const { email, password } = authCredentialsDto;
    const user = await this.userRepository.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const payload: JwtPayload = { email };
      const accessToken = ""
      this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Incorrect login details');
    }
  }
}
