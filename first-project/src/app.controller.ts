import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  setHello(): string {
    return 'Post done successfully!';
  }
}

@Controller('/users')
export class AppControllerUsers {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getUser();
  }

  @Post()
  setHello(): string {
    return 'Post done successfully, Hello user!';
  }
}
