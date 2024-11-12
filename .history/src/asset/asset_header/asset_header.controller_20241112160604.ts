import { Controller, Get, Post, Body, Param, Delete, UseGuards, Patch, Res, NotFoundException, UseInterceptors, UploadedFile, BadRequestException, } from '@nestjs/common';
import { AssetHeaderService } from './asset_header.service';
import { CreateAssetHeaderDto } from './dto/create-asset_header.dto';
import { JwtGuard } from 'src/auth/guards/jwt-auth-guard';
import { UpdateAssetHeaderDto } from './dto/update-asset_header.dto';
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as path from "path";

@UseGuards(JwtGuard)
@Controller('assets')
export class AssetHeaderController {
  constructor(private readonly assetHeaderService: AssetHeaderService) { }

  @Post()
  create(@Body() createAssetHeaderDto: CreateAssetHeaderDto) {
    return this.assetHeaderService.create(createAssetHeaderDto);
  }

  @Patch(':edp_No')
  update(@Param('edp_No') edp_No: string, @Body() updateAssetHeaderDto: UpdateAssetHeaderDto) {
    return this.assetHeaderService.update(edp_No, updateAssetHeaderDto);
  }

  @Get()
  findAll() {
    return this.assetHeaderService.findAll();
  }

  @Get('/count')
  findAllCount() {
    return this.assetHeaderService.findAllCount();
  }

  @Get('/annualcheckcount')
  findAllCount() {
    return this.assetHeaderService.findAllCount();
  }

  @Get('/photo/:filename')
  async getImage(@Param('filename') filename: string, @Res() res: Response) {
    try {
      const base64Image = await this.assetHeaderService.readImageFromSharedDrive(filename);
      res.set('Content-Type', 'image/jpeg');
      res.send(base64Image);
    } catch (error) {
      throw new NotFoundException('Image not found');
    }
  }

  @Post('/photo/upload')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './uploads',
      filename: (req, file, cb) => {
        const name = file.originalname.split(".")[0];
        const fileExtension = file.originalname.split(".")[1];
        const newFileName = name.split(" ").join("_") + "_" + Date.now() + "." + fileExtension;

        cb(null, `${file.originalname}`)
      }
    }),
    fileFilter: (req, file, cb) => {
      if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(null, false);
      }
      cb(null, false);
    }
  }))
  async uploadPhoto(@UploadedFile() file: Express.Multer.File) {
    console.log(file)
    if (!file) {
      throw new BadRequestException('File is not an image');
    } else {
      const response = {
        filePath: `http://172.16.58.231/AssetControl/Photos/${file.filename}`
      };
      return response;
    }
  }

  @Get('/selectCol/:category')
  findAllSelectCol(@Param('category') category: string) {
    return this.assetHeaderService.findAllSelectCol(category);
  }

  @Get('/spareSelectCol/:status')
  findAllSpareSelectCol(@Param('status') status: string) {
    return this.assetHeaderService.findAllSpareSelectCol(status);
  }

  @Get('/checkAsset/:edp_No')
  findOneCheckAsset(@Param('edp_No') edp_No: string): Promise<string | undefined> {
    return this.assetHeaderService.findOneCheckAsset(edp_No);
  }

  @Get(':edp_No')
  findOne(@Param('edp_No') edp_No: string) {
    return this.assetHeaderService.findOne(edp_No);
  }

  @Delete(':edp_No')
  remove(@Param('edp_No') edp_No: string) {
    return this.assetHeaderService.remove(edp_No);
  }
}
