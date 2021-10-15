import { Module } from '@nestjs/common';
import { ResultsModule } from './results/results.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ResultsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'asadishak',
      password: 'password!',
      database: 'reefBackendFinal',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
