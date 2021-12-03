import { forwardRef, Global, Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { WaterSampleEntity } from '../waterSamples/waterSample.entity';
import { WaterSampleModule } from '../waterSamples/waterSample.module';
import { UserController } from './user.controller';
import { UserEntity } from './user.entity';
import { UsersRepository } from './user.repository';
import { UserService } from './user.service';
@Global()
@Module({
  imports: [
    forwardRef(() => AuthModule),
    forwardRef(() => WaterSampleModule),
    TypeOrmModule.forFeature([UsersRepository, WaterSampleEntity]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
