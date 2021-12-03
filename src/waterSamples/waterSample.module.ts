import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntitySchema } from 'typeorm';
import { AuthModule } from '../auth/auth.module';
import { JwtStrategy } from '../auth/jwt.strategy';
import { UserEntity } from '../user/user.entity';
import { UserModule } from '../user/user.module';
import { UsersRepository } from '../user/user.repository';
import { UserService } from '../user/user.service';
import { WaterSampleController } from './waterSample.controller';
import { WaterSampleEntity } from './waterSample.entity';
import { WaterSampleService } from './waterSample.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([WaterSampleEntity, UsersRepository]),
    forwardRef(() => UserModule),
    JwtStrategy,
    AuthModule,
  ],

  controllers: [WaterSampleController],
  providers: [WaterSampleService],
  exports: [WaterSampleService],
})
export class WaterSampleModule {}
