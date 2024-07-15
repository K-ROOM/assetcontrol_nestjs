import { Body, Controller, Get, Param, Post, Res, UploadedFile, UseInterceptors } from "@nestjs/common";
import { AppService } from './app.service';
import {Response} from "express";
import  * as path from "path";

interface FileParams {
  fileName : string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @UseGuards(LocalAuthGuard)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/getFile/:fileName")
  getFile(@Param('fileName') fileName, @Res() res: Response, @Body() file: FileParams) {
    res.sendFile(path.resolve(process.cwd(), "file:/172.16.58.231/HRSystem/Photos/" + fileName));
  }
}
