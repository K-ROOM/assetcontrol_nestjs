import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';

@Injectable()
export class EweLinkService {
  constructor(private httpService: HttpService) {}

  async getDeviceInformation(deviceId: string): Promise<any> {
    const apiKey = 'your-api-key';
    const apiSecret = 'your-api-secret';
    const url = `https://eu-api.coolkit.cc:8080/api/user/device?apiKey=${apiKey}&apiSecret=${apiSecret}&deviceid=${deviceId}`;

    try {
      const response: AxiosResponse = await this.httpService.get(url).toPromise();
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch device information: ${error.message}`);
    }
  }
}
