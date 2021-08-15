import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authCredentialsDTO } from './dtos/authCredentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authservice: AuthService) {}
  @Post('/signup')
  signUp(@Body() authCredentialsDto: authCredentialsDTO): Promise<void> {
    return this.authservice.signup(authCredentialsDto);
  }
}
