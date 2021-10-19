import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userInfo } from 'os';
import { Repository } from 'typeorm';
import { WaterSampleEntity } from '../results/waterResults.entity';
import { WaterResultsService } from '../results/waterResults.service';
import {
  CreateUserDto,
  UpdateUserAquariumTypeDto,
} from '../shared/dtos/user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
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
    (newUser.lastName = user.lastName),
      (newUser.aquariumType = user.aquariumType);
    return this.userRepository.save({ ...newUser });
  }

  public async editAquariumType(updateAquariumType: UpdateUserAquariumTypeDto) {
    const currentUser = this.getUserByEmail(updateAquariumType.email);
    (await currentUser).aquariumType = updateAquariumType.aquariumType;
    return currentUser;
  }
}
