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

  public async editAquariumType(updateAquariumType: UpdateUserAquariumTypeDto) {
    const currentUser: UserEntity = await this.userRepository.findOneOrFail({
      where: { email: updateAquariumType.email },
    });
    currentUser.aquariumType = updateAquariumType.aquariumType;
    await this.userRepository.save(currentUser);
    return currentUser;
  }

  // public async returnWaterRecommendations(email: string) {
  //   const currentUser = this.userRepository.findOneOrFail(email);
  //   const usersWaterSamples = (await currentUser).waterResults;
  //   return this.waterSampleService.waterOptimisationAlgorithm(
  //     usersWaterSamples,
  //   );
  // }

  public async getUserByEmail(email: string) {
    return this.userRepository.findOneOrFail({ where: { email: email } });
  }

  public async checkJWTValidity(email: string) {
    if (this.userRepository.findOneOrFail(email)) {
      return true;
    }
    return false;
  }
}
