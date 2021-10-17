import { Module } from '@nestjs/common';
import { WaterResultsModule } from './results/waterResults.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    WaterResultsModule,
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
