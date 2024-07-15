import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ImageService {
  async getImageFromServer(): Promise<Buffer> {
    const response = await axios.get(url, {
      auth: {
        username,
        password,
      },
      responseType: 'arraybuffer',
    });

    return Buffer.from(response.data, 'binary');
  }
}