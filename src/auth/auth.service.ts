import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { authCredentialsDTO } from './dtos/authCredentials.dto';
import { UsersRepository } from './users.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
  ) {}

  async signup(authCredentialsDto: authCredentialsDTO): Promise<void> {
    return this.usersRepository.createrUser(authCredentialsDto);
  }
}
