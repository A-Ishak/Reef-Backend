import { Body, Controller, Inject, Post, Put, Redirect } from '@nestjs/common';
import { isEmail } from 'class-validator';
import {
  CreateUserDto,
  UpdateUserAquariumTypeDto,
} from '../shared/dtos/user.dto';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(@Inject(UserService) private readonly userService: UserService) {}

  @Post('/userCreation')
  public async createUser(@Body() userDto: CreateUserDto): Promise<UserEntity> {
    return this.userService.createUser(userDto);
  }

  @Put('/editAquariumType')
  public async editAquariumType(
    @Body() updateUserAquariumTypeDto: UpdateUserAquariumTypeDto,
  ) {
    return this.userService.editAquariumType(updateUserAquariumTypeDto);
  }
}
