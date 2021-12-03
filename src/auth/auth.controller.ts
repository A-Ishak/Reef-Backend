import { Body, Controller, Post } from '@nestjs/common';
import { UserEntity } from '../user/user.entity';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() authCredentialsDto: CreateUserDto): Promise<UserEntity> {
    return this.authService.createUser(authCredentialsDto);
  }

  @Post('/signin')
  signIn(
    @Body() authCredentialsDto: CreateUserDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialsDto);
  }
}
