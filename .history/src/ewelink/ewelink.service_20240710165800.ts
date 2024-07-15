// ewelink.service.ts

import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map } from 'rxjs/operators';

@Injectable()
export class EwelinkService {
  constructor(
    private httpService: HttpService,
    private configService: ConfigService,
  ) {}

  async getDevice(deviceId: string) {
    const apiKey = this.configService.get<string>('EWE_LINK_API_KEY');
    const apiSecret = this.configService.get<string>('EWE_LINK_API_SECRET');

    const url = `https://eu-api.coolkit.cc:8080/api/user/device/${deviceId}/info`;
    const headers = {
      Authorization: `Bearer ${apiKey}.${apiSecret}`,
      'Content-Type': 'application/json',
    };

    return this.httpService
      .get(url, { headers })
      .pipe(
        map(response => response.data),
      )
      .toPromise();
  }
}
