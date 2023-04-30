import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      'greeting': 'Hello World!',
    };
  }
  getHola(): any {
    return {
      'greeting': 'Hola Mundo!',
    };
  }
}
