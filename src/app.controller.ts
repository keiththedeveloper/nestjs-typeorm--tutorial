import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<User> {
    return this.appService.createUser(User);
  }

  @Get()
  getUsers(): Promise<User[]> {
    return this.appService.getAll();
  }
}
