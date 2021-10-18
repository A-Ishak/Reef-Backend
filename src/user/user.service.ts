import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userInfo } from 'os';
import { Repository } from 'typeorm';
import { UserDto } from '../shared/dtos/user.dto';
import { EAquariumTypes } from '../shared/types/aquariumTypes';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  public async getUserByEmail(userEmail: string) {
    const user = await this.userRepository.findOneOrFail({
      where: { email: userEmail },
    });
    return user;
  }

  public async createUser(user: UserDto): Promise<UserEntity> {
    const newUser: UserEntity = new UserEntity();
    newUser.email = user.email;
    newUser.firstName = user.firstName;
    (newUser.lastName = user.lastName),
      (newUser.aquariumType = user.aquariumType);
    return this.userRepository.save({ ...newUser });
  }

  public async editAquariumType(
    userEmail: string,
    newAquariumType?: EAquariumTypes,
  ): Promise<UserEntity> {
    const currentUser = this.getUserByEmail(userEmail);
    (await currentUser).aquariumType = newAquariumType;
    return this.userRepository.save({}); // This isnt working
  }
}
