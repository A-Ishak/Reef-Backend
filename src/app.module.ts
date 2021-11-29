import { Module } from '@nestjs/common';
import { WaterSampleModule } from './waterSamples/waterSample.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { JwtStrategy } from './auth/jwt.strategy';

@Module({
  imports: [
    WaterSampleModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'asadishak',
      password: 'password',
      database: 'reefBackendFinal',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
