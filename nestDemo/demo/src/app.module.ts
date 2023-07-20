import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsController, UserController],
  providers: [AppService, CatsService, UserService],
})
export class AppModule {}
