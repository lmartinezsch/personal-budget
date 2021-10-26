import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OperationsController } from './controllers/operation.controller';
import { OperationsService } from './services/operation.service';

@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule],
  controllers: [AppController, OperationsController],
  providers: [AppService, OperationsService],
})
export class AppModule {}
