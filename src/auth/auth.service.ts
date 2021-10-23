import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterNewAccountDto } from '../shared/dtos/user.dto';
import { CreateWaterSampleDTO } from '../shared/dtos/water-sample.dto';
import { UserEntity } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { WaterSampleEntity } from '../waterSamples/waterSample.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private userService: UserService,
  ) {}

  public async registerNewAccount(newUser: RegisterNewAccountDto) {
    // try{
    //   const {f}
    // }
  }
}
