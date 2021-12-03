import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AuthCredentialsDto, CreateUserDto } from '../user/user.dto';
import { UserEntity } from '../user/user.entity';
import { Repository } from 'typeorm';
import { JwtPayload } from '../shared/types/jwt-payloadTypes';
import { UsersRepository } from '../user/user.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  public async createUser(user: CreateUserDto): Promise<UserEntity> {
    const newUser: UserEntity = new UserEntity();
    newUser.email = user.email;
    newUser.firstName = user.firstName;
    newUser.lastName = user.lastName;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(user.password, salt);

    newUser.password = hashedPassword;

    const createdUser = this.usersRepository.create({ ...newUser });
    try {
      return await this.usersRepository.save(createdUser);
    } catch (error) {
      if (error.code === '23505')
        throw new ConflictException('Email is already in use');
      else {
        throw new InternalServerErrorException();
      }
    }
  }

  public async signIn(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    const { email, password } = authCredentialsDto;
    const user = await this.usersRepository.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const payload: JwtPayload = { email };
      const accessToken = this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Incorrect login details');
    }
  }
}
