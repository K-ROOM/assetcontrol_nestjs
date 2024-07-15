import { Injectable } from '@nestjs/common';
import { CreateAssetSpareDto } from './dto/create-asset_spare.dto';
import { UpdateAssetSpareDto } from './dto/update-asset_spare.dto';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { AssetSpare } from './entities/asset_spare.entity';
import { DataSource, Repository } from 'typeorm';
import { MasterSubcategory } from 'src/master/master_subcategory/entities/master_subcategory.entity';

@Injectable()
export class AssetSpareService {
  constructor(
    @InjectRepository(AssetSpare)
    private readonly assetspareRepository: Repository<AssetSpare>,
    @InjectRepository(MasterSubcategory)
    private readonly masterSubcategoryRepository: Repository<MasterSubcategory>,
    @InjectDataSource() private dataSource: DataSource
  ) { }

  async create(createAssetSpareDto: CreateAssetSpareDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {

      console.log(JSON.stringify(createAssetSpareDto))

      const masterSubcategory = await this.masterSubcategoryRepository.findOne({ where: { subCategory: createAssetSpareDto.subCategory } });

      createAssetSpareDto.edp_No = masterSubcategory.sub_Code + '.' + masterSubcategory.running

      console.log(createAssetSpareDto.edp_No)

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

      await this.assetspareRepository.save(createAssetSpareDto);

      await this.masterSubcategoryRepository.update(masterSubcategory.subCategory, masterSubcategory);

      await queryRunner.commitTransaction();

    } catch (error) {
      console.log('error: ' + error);
      await queryRunner.rollbackTransaction();
      throw new Error('Transaction failed');
    } finally {
      await queryRunner.release();
      return {
        edp_No: createAssetSpareDto.edp_No,
        "status": "ok", "msg": "Update Budget was successful",
      }
    }

  }

  findAll() {
    return this.assetspareRepository.find();
  }

  findAllSelectCol(category: string) {
    return this.assetspareRepository.find({
      select: ['edp_No', 'fin_No', 'category', 'subCategory', 'status'],
      select: ['edp_No', 'fin_No', 'category', 'subCategory', 'status',l'branchCode', 'userName', 'annualCheckStatus'],
      where: { category: category },
      order: {
        branchCode: 'ASC'
      }
    });
  }

  findOne(edp_No: string) {
    return this.assetspareRepository.findOne({
      where: { edp_No: edp_No },
    });
  }

  update(edp_No: string, updateAssetSpareDto: UpdateAssetSpareDto) {
    return this.assetspareRepository.update(edp_No, updateAssetSpareDto);
  }

  remove(edp_No: string) {
    return this.assetspareRepository.delete(edp_No);
  }
}
