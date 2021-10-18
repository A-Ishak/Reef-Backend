import { Body, Controller, Inject, Post, Put, Redirect } from '@nestjs/common';
import { UserDto } from '../shared/dtos/user.dto';
import { EAquariumTypes } from '../shared/types/aquariumTypes';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(@Inject(UserService) private readonly userService: UserService) {}

  @Post('/userCreation')
  public async createUser(@Body() userDto: UserDto): Promise<UserEntity> {
    return this.userService.createUser(userDto);
  }

  @Put('/editAquariumType')
  public async editAquariumType(
    @Body() userEmail: string,
    @Body() newAquariumType: EAquariumTypes,
  ) {
    return this.userService.editAquariumType(userEmail, newAquariumType);
  }
}
