import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map } from 'rxjs/operators';

@Injectable()
export class EwelinkService {
  private readonly apiUrl: string = 'https://api.ewelink.cc/v2/user/login';

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {}

  async getData(): Promise<any> {
    const username = this.configService.get('p.ronakorn@nipponexpress-necl.co.th');
    const password = this.configService.get('abc_123456');

    const response = await this.httpService.post(this.apiUrl, {
      email: username,
      password: password,
    }).pipe(
      map(response => response.data)
    ).toPromise();

    return response;
  }
}
