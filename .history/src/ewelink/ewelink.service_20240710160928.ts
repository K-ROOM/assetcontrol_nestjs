import { Injectable } from '@nestjs/common';
import { EwelinkApi } from 'ewelink-api'; // หรือจะเป็น ewelink-api-wrapper ก็ได้

@Injectable()
export class EweLinkService {
  private readonly eweLink: EwelinkApi;

  constructor() {
    // สร้าง instance ของ ewelink-api
    this.eweLink = new EwelinkApi({
      email: 'p.ronakorn@nipponexpress-necl.co.th',
      password: 'abc_123456',
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
