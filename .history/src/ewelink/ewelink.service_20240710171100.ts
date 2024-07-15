// ewelink.service.ts

import { HttpService } from '@nestjs/axios';
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
    const apiKey = this.configService.get<string>('txxI8K66pWCTUdHLNpzFA26NWG1I3xL4');
    const apiSecret = this.configService.get<string>('9VMqg1jSQXB1sQOiKWPr2zOrNlhjJRny');
    const url = `https://dev.ewelink.cc/api/user/device/${deviceId}/info`;
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
