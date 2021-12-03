import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';

import { UserEntity } from './user.entity';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './user.dto';

@EntityRepository(UserEntity)
export class UsersRepository extends Repository<UserEntity> {
  public async createUser(user: CreateUserDto): Promise<UserEntity> {
    const newUser: UserEntity = new UserEntity();
    newUser.email = user.email;
    newUser.firstName = user.firstName;
    newUser.lastName = user.lastName;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(user.password, salt);

    newUser.password = hashedPassword;

    const createdUser = this.create({ ...newUser });
    try {
      return await this.save(createdUser);
    } catch (error) {
      if (error.code === '23505')
        throw new ConflictException('Email is already in use');
      else {
        throw new InternalServerErrorException();
      }
    }
  }
}
