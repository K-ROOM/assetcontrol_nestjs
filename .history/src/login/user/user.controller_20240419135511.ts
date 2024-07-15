import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Res,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JwtGuard } from 'src/auth/guards/jwt-auth-guard';
import { Response } from 'express';

@UseGuards(JwtGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get('/profile/:filename')
  async getImage(@Param('filename') filename: string, @Res() res: Response) {
    try {
      const imageBuffer = await this.userService.readImageFromSharedDrive(filename);
      res.set('Content-Type', 'image/jpeg');
      res.send(imageBuffer);
    } catch (error) {
      throw new NotFoundException('Image not found');
    }
  }

  @Get(':userID')
  findOne(@Param('userID') userID: string) {
    return this.userService.findOne(userID);
  }

  @Patch(':userID')
  update(
    @Param('userID') userID: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(userID, updateUserDto);
  }

  @Delete(':userID')
  remove(@Param('userID') userID: string) {
    return this.userService.remove(userID);
  }
}
