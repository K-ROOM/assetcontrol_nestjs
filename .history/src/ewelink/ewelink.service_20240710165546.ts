import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';

@Injectable()
export class EweLinkService {
  constructor(private httpService: HttpService) {}

  async getDeviceInformation(deviceId: string): Promise<any> {
    const apiKey = 'txxI8K66pWCTUdHLNpzFA26NWG1I3xL4';
    const apiSecret = '9VMqg1jSQXB1sQOiKWPr2zOrNlhjJRny';
    const url = `https://as-apia.coolkit.cc:8080/api/user/device?apiKey=${apiKey}&apiSecret=${apiSecret}&deviceid=${deviceId}`;

    try {
      const response: AxiosResponse = await this.httpService.get(url).toPromise();
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch device information: ${error.message}`);
    }
  }
}
