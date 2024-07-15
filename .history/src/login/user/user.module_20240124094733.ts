import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { ConfigService } from "@nestjs/config";
import { AuthService } from "src/auth/auth.service";

@Module({
  imports: [TypeOrmModule.forFeature([User, Role], 'login')],
  controllers: [UserController],
  providers: [UserService, ConfigService],
  exports: [UserService],
})
export class UserModule {}
