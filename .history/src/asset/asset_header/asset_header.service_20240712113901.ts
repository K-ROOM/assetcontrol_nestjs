import { Injectable } from '@nestjs/common';
import { CreateAssetHeaderDto } from './dto/create-asset_header.dto';
import { UpdateAssetHeaderDto } from './dto/update-asset_header.dto';
import { UpdateMasterSubcategoryDto } from 'src/master/master_subcategory/dto/update-master_subcategory.dto';
import { AssetHeader } from './entities/asset_header.entity';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Like, Repository } from 'typeorm';
import { MasterSubcategory } from 'src/master/master_subcategory/entities/master_subcategory.entity';
import { MasterSubcategoryService } from 'src/master/master_subcategory/master_subcategory.service';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AssetHeaderService {
  constructor(
    @InjectRepository(AssetHeader)
    private readonly assetRepository: Repository<AssetHeader>,
    @InjectRepository(MasterSubcategory)
    private readonly masterSubcategoryRepository: Repository<MasterSubcategory>,
    @InjectDataSource() private dataSource: DataSource
  ) { }

  async create(createAssetHeaderDto: CreateAssetHeaderDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {

      console.log(JSON.stringify(createAssetHeaderDto))

      const masterSubcategory = await this.masterSubcategoryRepository.findOne({ where: { subCategory: createAssetHeaderDto.subCategory } });

      createAssetHeaderDto.edp_No = masterSubcategory.sub_Code + '.' + masterSubcategory.running

      console.log(createAssetHeaderDto.edp_No)

      const subCode = masterSubcategory.sub_Code
      let runningNo = parseInt(masterSubcategory.running)
      const lengthInDB = 3
      runningNo++

      let configRun = runningNo.toString()
      const round = lengthInDB - configRun.length
      for (let i = 0; i < round; i++) {
        configRun = "0" + configRun
      }

      masterSubcategory.running = configRun

      console.log(configRun)

      await this.assetRepository.save(createAssetHeaderDto);

      await this.masterSubcategoryRepository.update(masterSubcategory.subCategory, masterSubcategory);

      await queryRunner.commitTransaction();

    } catch (error) {
      console.log('error: ' + error);
      await queryRunner.rollbackTransaction();
      throw new Error('Transaction failed');
    } finally {
      await queryRunner.release();
      return {
        edp_No: createAssetHeaderDto.edp_No,
        "status": "ok", "msg": "Update Budget was successful",
      }
    }

  }

  update(edp_No: string, updateAssetHeaderDto: UpdateAssetHeaderDto) {
    console.log(updateAssetHeaderDto)
    return this.assetRepository.update(edp_No, updateAssetHeaderDto);
  }

  findAll() {
    return this.assetRepository.find({
      relations: {
        ipHeader: true,
      },
    });
  }

  findAllCount() {
    const entityManager = this.assetRepository.manager
    return this.assetRepository.query(`
    SELECT 
    (SELECT COUNT(*) FROM tblAssetMain WHERE Category = 'Computer' AND Status = 'Active') AS ComputerActiveCount,
	  (SELECT COUNT(*) FROM tblAssetMain WHERE Category = 'Computer' AND Status = 'In Stock') AS ComputerInStockCount,
    (SELECT COUNT(*) FROM tblAssetMain WHERE Category = 'Printer' AND Status = 'Active') AS PrinterActiveCount,
	  (SELECT COUNT(*) FROM tblAssetMain WHERE Category = 'Printer' AND Status = 'In Stock') AS PrinterInStockCount,
    (SELECT COUNT(*) FROM tblAssetMain WHERE Category = 'Network Equipment' AND Status = 'Active') AS NetworkEquipmentActiveCount,
	  (SELECT COUNT(*) FROM tblAssetMain WHERE Category = 'Network Equipment' AND Status = 'In Stock') AS NetworkEquipmentInStockCount,
	  (SELECT COUNT(*) FROM tblAssetMain WHERE Category = 'Phone' AND Status = 'Active') AS PhoneActiveCount,
	  (SELECT COUNT(*) FROM tblAssetMain WHERE Category = 'Phone' AND Status = 'In Stock') AS PhoneInStockCount,
	  (SELECT COUNT(*) FROM tblAssetMain WHERE Category = 'Projector' AND Status = 'Active') AS ProjectorActiveCount,
	  (SELECT COUNT(*) FROM tblAssetMain WHERE Category = 'Projector' AND Status = 'In Stock') AS ProjectorInStockCount,
	  (SELECT COUNT(*) FROM tblAssetMain WHERE Category = 'Storage' AND Status = 'Active') AS StorageActiveCount,
	  (SELECT COUNT(*) FROM tblAssetMain WHERE Category = 'Storage' AND Status = 'In Stock') AS StorageInStockCount,
	  (SELECT COUNT(*) FROM tblAssetMain WHERE Category = 'UPS' AND Status = 'Active') AS UPSActiveCount,
	  (SELECT COUNT(*) FROM tblAssetMain WHERE Category = 'UPS' AND Status = 'In Stock') AS UPSInStockCount,
	  (SELECT COUNT(*) FROM tblAssetMain WHERE Category = 'Other' AND Status = 'Active') AS OtherActiveCount,
	  (SELECT COUNT(*) FROM tblAssetMain WHERE Category = 'Other' AND Status = 'In Stock') AS OtherInStockCount,
	  (SELECT COUNT(*) FROM tblSpareParts WHERE Category = 'Spare Parts' AND Status = 'Active') AS SparePartsActiveCount,
	  (SELECT COUNT(*) FROM tblSpareParts WHERE Category = 'Spare Parts' AND Status = 'In Stock') AS SparePartsInStockCount,
	  (SELECT COUNT(*) FROM tblIPAddress_Status WHERE Status = 'Active') AS IPAddressActiveCount,
	  (SELECT COUNT(*) FROM tblIPAddress_Status WHERE Status = 'Empty') AS IPAddressEmptyCount`);
  }

  findAllSelectCol(category: string) {
    return this.assetRepository.find({
      select: ['edp_No', 'fin_No', 'category', 'subCategory', 'status', 'firstCheck', 'lastCheck', 'inputUser', 'modifiedBy', 'branchCode', 'userName', 'annualCheckStatus'],
      where: { category: category },
      order: {
        branchCode: 'ASC'
      }
    });
  }

  findAllSpareSelectCol(status: string) {
    return this.assetRepository.find({
      select: ['edp_No', 'fin_No', 'category', 'subCategory', 'status'],
      where: { status: Like(`%${status}%`) },
      order: {
        branchCode: 'ASC'
      }
    });
  }

  async findOneCheckAsset(edp_No: string): Promise<string | undefined> {
    const assetHeader = await this.assetRepository.findOne({
      where: { edp_No: edp_No },
      select: ['edp_No'],
    });
    if (assetHeader) {
      return assetHeader.edp_No
    }
    return undefined
  }

  findOne(edp_No: string) {
    return this.assetRepository.findOne({
      where: { edp_No: edp_No },
      relations: {
        ipHeader: true,
      },
    });
  }

  remove(edp_No: string) {
    return this.assetRepository.delete(edp_No);
  }

  async readImageFromSharedDrive(filename: string): Promise<Buffer> {
    const fullPath = path.join('//172.16.58.231/AssetControl/Photos/', filename + ".jpg");
    console.log(fullPath)
    return new Promise((resolve, reject) => {
      fs.readFile(fullPath, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
}
