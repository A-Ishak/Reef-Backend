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
import { UsersRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UsersRepository)
    private userRepository: UsersRepository,
    @Inject(forwardRef(() => WaterSampleService))
    private readonly waterSampleService: WaterSampleService,
  ) {}

  public async getUserByEmail(userEmail: string) {
    const user: UserEntity = await this.userRepository.findOneOrFail({
      where: { email: userEmail },
    });
    return user;
  }

  public async editAquariumType(updateAquariumType: UpdateUserAquariumTypeDto) {
    const currentUser = this.getUserByEmail(updateAquariumType.email);
    (await currentUser).aquariumType = updateAquariumType.aquariumType;
    return (await currentUser).aquariumType;
  }

  public async returnWaterRecommendations(email: string) {
    const currentUser = this.getUserByEmail(email);
    const usersWaterSamples = (await currentUser).waterResults;
    return this.waterSampleService.waterOptimisationAlgorithm(
      usersWaterSamples,
    );
  }
}
