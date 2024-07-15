import { Injectable } from '@nestjs/common';
const ewelink = require('ewelink-api');

@Injectable()
export class EwelinkService {
  private connection;

  constructor() {
    this.connection = new ewelink({
      email: 'p.ronakorn@nipponexpress-necl.co.th',
      password: 'abc_123456',
      region: 'th',
    });
  }

  async getDevices() {
    try {
      console.log('xxxxx');
      return await this.connection.getDevices();
    } catch (error) {
      throw new Error(`Failed to fetch devices: ${error.message}`);
    }
  }
}
