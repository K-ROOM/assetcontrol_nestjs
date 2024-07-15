import { Injectable, HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map } from 'rxjs/operators';

@Injectable()
export class EwelinkService {
  private readonly loginUrl: string = 'https://api.ewelink.cc/v2/user/login';

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {}

  async getData(): Promise<any> {
    const username = this.configService.get<string>('EWELINK_USERNAME');
    const password = this.configService.get<string>('EWELINK_PASSWORD');
    const appId = this.configService.get<string>('EWELINK_APP_ID');
    const appSecret = this.configService.get<string>('EWELINK_APP_SECRET');

    const response = await this.httpService.post(this.loginUrl, {
      email: username,
      password: password,
      appid: appId,
      appsecret: appSecret
    }).pipe(
      map(response => response.data)
    ).toPromise();

    return response;
  }
}
