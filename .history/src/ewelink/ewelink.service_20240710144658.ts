import { Injectable } from '@nestjs/common';
import ewelink from 'ewelink-api';

@Injectable()
export class EwelinkService {
  private connection;

  constructor() {
    this.connection = new ewelink({
      email: 'your_email',
      password: 'your_password',
      region: 'us',
    });
  }

  async getDevices() {
    return await this.connection.getDevices();
  }

  async getDevice(deviceId: string) {
    return await this.connection.getDevice(deviceId);
  }
}
