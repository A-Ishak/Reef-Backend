import { forwardRef, Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WaterSampleEntity } from '../waterSamples/waterSample.entity';
import { WaterSampleModule } from '../waterSamples/waterSample.module';
import { UserController } from './user.controller';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';

@Module({
  imports: [
    forwardRef(() => PassportModule.register({ defaultStrategy: 'jwt' })),
    JwtModule.register({
      secret: 'topSecret51',
      signOptions: { expiresIn: 3600 },
    }),
    TypeOrmModule.forFeature([UserEntity, WaterSampleEntity]),
    forwardRef(() => WaterSampleModule),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService, PassportModule],
})
export class UserModule {}
