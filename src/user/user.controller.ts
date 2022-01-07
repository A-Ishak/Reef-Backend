import {
  Body,
  Controller,
  Get,
  Inject,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { isEmail } from 'class-validator';
import { EmailToLowerCasePipe } from '../shared/pipes/validation-pipes';
import { CreateUserDto, UpdateUserAquariumTypeDto } from './user.dto';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
@UseGuards(AuthGuard())
export class UserController {
  constructor(@Inject(UserService) private readonly userService: UserService) {}

  @Put('/editAquariumType')
  public async editAquariumType(
    @Body(new EmailToLowerCasePipe())
    updateUserAquariumTypeDto: UpdateUserAquariumTypeDto,
  ) {
    return this.userService.editAquariumType(updateUserAquariumTypeDto);
  }

  @Post('/checkJWTValidity')
  public async checkJWTValidity(
    @Body(new EmailToLowerCasePipe())
    email: string,
  ): Promise<Boolean> {
    return this.userService.checkJWTValidity(email);
  }
}
