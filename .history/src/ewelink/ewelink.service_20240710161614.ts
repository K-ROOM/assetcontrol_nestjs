import { Injectable } from '@nestjs/common';
const ewelink = require('ewelink-api');

@Injectable()
export class EweLinkService {
  private readonly eweLink: any;

  constructor() {
    // สร้าง instance ของ ewelink-api
    const connection = new ewelink({
      email: '<your ewelink email>',
      password: '<your ewelink password>',
      region: '<your ewelink region>',
    });
    this.eweLink = connection;
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
