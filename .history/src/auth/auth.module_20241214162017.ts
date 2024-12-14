import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local-strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtStrategy } from './strategies/jwt-strategy';
import { RefreshJwtStrategy } from './strategies/refreshToken.strategy';
import { UserService } from 'src/login/user/user.service';
import { User } from 'src/login/user/entities/user.entity';
import { jwtConstants } from './constants';

@Module({
  providers: [
    LocalStrategy,
    JwtStrategy,
    RefreshJwtStrategy,
    UserService,
    AuthService,
  ],
  controllers: [AuthController],
  imports: [
    TypeOrmModule.forFeature([User], 'login'),
    JwtModule.register({
      secret: jwtConstants.secret,
      // signOptions: { expiresIn: '3600s' },
      signOptions: { expiresIn: '3600s' },
    }),
  ],
})
export class AuthModule {}