import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  @UseGuards(LocalAuthGuard)
  getHello(): string {
    return 'Hello World!';
  }
}
