import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDTO } from './dtos/authCredentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authservice: AuthService) {}
  @Post('/signup')
  signUp(@Body() authCredentialsDto: AuthCredentialsDTO): Promise<void> {
    return this.authservice.signup(authCredentialsDto);
  }
}
