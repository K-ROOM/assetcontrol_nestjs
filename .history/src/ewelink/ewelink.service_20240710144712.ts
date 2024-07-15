import { Injectable } from '@nestjs/common';
import ewelink from 'ewelink-api';

@Injectable()
export class EwelinkService {
  private connection;

  constructor() {
    this.connection = new ewelink({
      email: 'p.ronakorn@nipponexpress-necl.co.th',
      password: 'your_password',
      region: 'th',
    });
  }

  async getDevices() {
    return await this.connection.getDevices();
  }

  async getDevice(deviceId: string) {
    return await this.connection.getDevice(deviceId);
  }
}
