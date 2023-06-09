import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('api/english')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('api/spanish')
  getHola(): string {
    return this.appService.getHola();
  }
}
