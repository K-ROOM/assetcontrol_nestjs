import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AssetSpareService } from './asset_spare.service';
import { CreateAssetSpareDto } from './dto/create-asset_spare.dto';
import { UpdateAssetSpareDto } from './dto/update-asset_spare.dto';
import { JwtGuard } from 'src/auth/guards/jwt-auth-guard';

@UseGuards(JwtGuard)
@Controller('assetspare')
export class AssetSpareController {
  constructor(private readonly assetSpareService: AssetSpareService) {}

  @Post()
  create(@Body() createAssetSpareDto: CreateAssetSpareDto) {
    return this.assetSpareService.create(createAssetSpareDto);
  }

  @Get()
  findAll() {
    return this.assetSpareService.findAll();
  }

  @Get('/selectCol/:category')
  findAllSelectCol(@Param('category') category: string) {
    return this.assetSpareService.findAllSelectCol(category);
  }

  @Get(':edp_No')
  findOne(@Param('edp_No') edp_No: string) {
    return this.assetSpareService.findOne(edp_No);
  }

  @Patch(':edp_No')
  update(@Param('edp_No') edp_No: string, @Body() updateAssetSpareDto: UpdateAssetSpareDto) {
    return this.assetSpareService.update(edp_No, updateAssetSpareDto);
  }

  @Delete(':edp_No')
  remove(@Param('edp_No') edp_No: string) {
    return this.assetSpareService.remove(edp_No);
  }
}
