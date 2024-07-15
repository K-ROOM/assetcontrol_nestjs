import { Injectable } from '@nestjs/common';
const ewelink = require('ewelink-api');

@Injectable()
export class EweLinkService {
  private readonly eweLink: any;

  constructor() {
    // สร้าง instance ของ ewelink-api
    const connection = new ewelink({
      email: 'p.ronakorn@nipponexpress-necl.co.th',
      password: 'abc_123456',
      region: 'th',
    });
    const region = connection.getRegion();
    console.log();
    this.eweLink = connection;
  }

  async getDeviceStatus(deviceId: string) {
    try {
      const status = await this.eweLink.getDeviceCurrentTemperature(deviceId);
      return status;
    } catch (error) {
      throw new Error(`Failed to get device status: ${error.message}`);
    }
  }
}
