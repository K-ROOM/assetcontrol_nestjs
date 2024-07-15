import { Injectable } from '@nestjs/common';
const ewelink = require('ewelink-api');

@Injectable()
export class EweLinkService {
  private readonly eweLink: ewelink;

  constructor() {
    // สร้าง instance ของ ewelink-api
    this.eweLink = new EwelinkApi({
      email: 'your_email@example.com',
      password: 'your_password',
    });
  }

  async getDeviceStatus(deviceId: string) {
    try {
      const status = await this.eweLink.getDevicePowerState(deviceId);
      return status;
    } catch (error) {
      throw new Error(`Failed to get device status: ${error.message}`);
    }
  }
}
