import { Injectable } from '@nestjs/common';
import { UserService } from 'src/login/user/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/login/user/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { ok } from 'assert';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.findOneWithUserName(username);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User) {
    const payload = {
      sub: user.userID,
      username: user.username,
    };

    return {
      status: 'ok',
      message: 'Logged in',
      accessToken: this.jwtService.sign(payload),
      accessTokenExpiresIn: '360',
      refreshToken: this.jwtService.sign(payload, { expiresIn: '7d' }),
      user: { username: user.username, userId: user.userID },
      roles: { app: user.roles }
    };
  }

  async refreshToken(user: User) {
    const payload = {
      sub: user.userID,
      username: user.username,
    };
    console.log('user.userID: '+ user.userID);
    return {
      status: 'ok',
      message: 'Token is refreshed successfully!',
      accessToken: this.jwtService.sign(payload),
      accessTokenExpiresIn: '60',
      refreshToken: this.jwtService.sign(payload, { expiresIn: '7d' }),
    };
  }
}
