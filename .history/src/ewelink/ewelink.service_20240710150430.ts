import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class EwelinkService {
  private readonly apiUrl: string = 'https://api.ewelink.cc/v2/user/login';

  constructor(private readonly httpService: HttpService) {}

  async getData(username: string, password: string): Promise<any> {
    const response = await this.httpService.post(this.apiUrl, {
      email: username,
      password: password,
    }).pipe(
      map(response => response.data)
    ).toPromise();

    return response;
  }
}
