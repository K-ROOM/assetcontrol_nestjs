import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EwelinkService {
  private apiUrl: string;
  private apiKey: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {
    this.apiUrl = this.configService.get<string>('EWELINK_API_URL');
    this.apiKey = this.configService.get<string>('EWELINK_API_KEY');
  }

  async getDevices(): Promise<any> {
    const headers = {
      'Authorization': `Bearer ${this.apiKey}`,
    };
    const response = await this.httpService
      .get(`${this.apiUrl}/v2/devices`, { headers })
      .toPromise();
    return response.data;
  }
}
