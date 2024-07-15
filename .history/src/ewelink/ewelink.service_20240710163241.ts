// src/ewelink/ewelink.service.ts

import { Injectable } from '@nestjs/common';
import ewelink from 'ewelink-api';

@Injectable()
export class EwelinkService {
  private connection;

  constructor() {
    this.connection = new ewelink({
      email: '<your ewelink email>',
      password: '<your ewelink password>',
    });
  }

  async getDevices() {
    try {
      return await this.connection.getDevices();
    } catch (error) {
      throw new Error(`Failed to fetch devices: ${error.message}`);
    }
  }
}
