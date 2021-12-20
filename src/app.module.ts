import { Module } from '@nestjs/common';
import { WaterSampleModule } from './waterSamples/waterSample.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { JwtStrategy } from './auth/jwt.strategy';
import { UserEntity } from './user/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { WaterSampleEntity } from './waterSamples/waterSample.entity';
import { AuthModule } from './auth/auth.module';
import { UserService } from './user/user.service';
import { Type } from 'class-transformer';

@Module({
  imports: [
    WaterSampleModule,
    UserModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'reefBackendFinal',
      autoLoadEntities: true,
      synchronize: true,
      entities: [UserEntity, WaterSampleEntity],
    }),
    TypeOrmModule.forFeature([UserEntity]),
  ],
})
export class AppModule {}
