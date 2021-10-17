import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WaterResultsEntity } from '../results/waterResults.entity';
import { UserController } from './user.controller';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([WaterResultsEntity, UserEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
