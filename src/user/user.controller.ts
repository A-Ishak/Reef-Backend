import { Body, Controller, Inject, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { isEmail } from 'class-validator';
import { EmailToLowerCasePipe } from '../shared/pipes/validation-pipes';
import {
  CreateUserDto,
  UpdateUserAquariumTypeDto,
} from './user.dto';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
@UseGuards(AuthGuard())
export class UserController {
  constructor(@Inject(UserService) private readonly userService: UserService) {}

  @Post('/signup')
  public async createUser(
    @Body(new EmailToLowerCasePipe()) userDto: CreateUserDto,
  ): Promise<UserEntity> {
    return this.userService.createUser(userDto);
  }

  @Put('/editAquariumType')
  public async editAquariumType(
    @Body(new EmailToLowerCasePipe())
    updateUserAquariumTypeDto: UpdateUserAquariumTypeDto,
  ) {
    return this.userService.editAquariumType(updateUserAquariumTypeDto);
  }
}
