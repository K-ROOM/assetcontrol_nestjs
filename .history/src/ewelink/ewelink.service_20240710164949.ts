import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { AxiosRequestConfig } from '@nestjs/axios';
import { retry } from 'rxjs/operators';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class EwelinkService {
  private apiUrl = 'https://as-apia.coolkit.cc';

  constructor(private readonly httpService: HttpService) {}

  async getDevices(): Promise<any> {
    const loginUrl = `${this.apiUrl}/user/login`;
    try {
      const response = await this.httpService.post(loginUrl, {
        email: 'p.ronakorn@nipponexpress-necl.co.th',
        password: 'abc_123456',
        region: 'as',
      }).toPromise();

      // If login is successful, proceed to get devices
      const devicesUrl = `${this.apiUrl}/user/devices`;
      const devicesResponse = await this.httpService.get(devicesUrl).toPromise();
      return devicesResponse.data;
    } catch (error) {
      // Retry logic for network errors
      if (error.code === 'ENOTFOUND' || error.code === 'ECONNREFUSED') {
        console.error('Network error, retrying...');
        // Retry logic with exponential backoff
        return this.retryRequest(this.getDevices.bind(this));
      }
      throw new Error(`Failed to fetch devices: ${error.message}`);
    }
  }

  private async retryRequest(fn: () => Promise<any>, retriesLeft = 3): Promise<any> {
    try {
      return await fn();
    } catch (error) {
      if (retriesLeft <= 0) {
        throw new Error(`Retry limit exceeded: ${error.message}`);
      }
      await new Promise(resolve => setTimeout(resolve, 1000 * (4 - retriesLeft)));
      return this.retryRequest(fn, retriesLeft - 1);
    }
  }
}
