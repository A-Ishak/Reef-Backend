import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userInfo } from 'os';
import { Repository } from 'typeorm';
import { UserDto } from '../shared/dtos/user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  public async createUser(user: UserDto): Promise<UserEntity> {
    const newUser: UserEntity = new UserEntity();
    newUser.email = user.email;
    newUser.firstName = user.firstName;
    (newUser.lastName = user.lastName),
      (newUser.aquariumType = user.aquariumType);
    return this.userRepository.save({ ...newUser });
  }
}
