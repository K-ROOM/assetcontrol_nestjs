import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as crypto from 'crypto';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class EwelinkService {
  private email = process.env.EWELINK_EMAIL;
  private password = process.env.EWELINK_PASSWORD;
  private appId = process.env.EWELINK_APP_ID;
  private apiUrl = 'https://api.coolkit.cc:8080/v2';

  private async getToken() {
    const nonce = crypto.randomBytes(16).toString('base64');
    const timestamp = Math.floor(Date.now() / 1000);
    const passwordHash = crypto.createHash('md5').update(this.password).digest('hex');

    const payload = {
      email: this.email,
      password: passwordHash,
      appid: this.appId,
      version: '8',
      nonce: nonce,
      ts: timestamp,
    };

    const response = await axios.post(`${this.apiUrl}/user/login`, payload);
    console.log(response.data);
    return response.data.at;
  }

  public async getDevices() {
    const token = await this.getToken();
    const response = await axios.get(`${this.apiUrl}/user/device`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  }
}
