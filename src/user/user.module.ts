import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WaterSampleController } from '../waterSamples/waterSample.controller';
import { WaterSampleEntity } from '../waterSamples/waterSample.entity';
import { WaterSampleModule } from '../waterSamples/waterSample.module';
import { WaterSampleService } from '../waterSamples/waterSample.service';
import { UserController } from './user.controller';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'topSecret51',
      signOptions: { expiresIn: 3600 },
    }),
    TypeOrmModule.forFeature([UserEntity, WaterSampleEntity]),
    forwardRef(() => WaterSampleModule),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
