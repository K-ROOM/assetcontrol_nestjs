import { Injectable } from '@nestjs/common';
import { CreateCheckperiodDto } from './dto/create-checkperiod.dto';
import { UpdateCheckperiodDto } from './dto/update-checkperiod.dto';
import { Checkperiod } from './entities/checkperiod.entity';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { CheckperiodDetail } from 'src/checkperiod_detail/entities/checkperiod_detail.entity';

@Injectable()
export class CheckperiodService {
  constructor(
    @InjectRepository(Checkperiod)
    private readonly checkPeriodRepository: Repository<Checkperiod>,
    @InjectDataSource() private dataSource: DataSource
  ) { }

  create(createCheckperiodDto: CreateCheckperiodDto) {
    return this.checkPeriodRepository.save(createCheckperiodDto);
  }

  findAll() {
    return this.checkPeriodRepository.find({
      order: {
        workYear: 'DESC',
        halfName: 'DESC',
      },
    });
  }

  async findLatest(): Promise<Checkperiod | undefined> {
    return this.checkPeriodRepository.find({
      order: {
        workYear: 'DESC',
        halfName: 'DESC',
      },
      take: 1,
    }).then(results => results[0]);
  }

  findOne(id: number) {
    return `This action returns a #${id} checkperiod`;
  }

  update(id: number, updateCheckperiodDto: UpdateCheckperiodDto) {
    return `This action updates a #${id} checkperiod`;
  }

  remove(id: number) {
    return `This action removes a #${id} checkperiod`;
  }

  // async createHistoryTransaction(data: any) {
  //   const queryRunner = this.dataSource.createQueryRunner();
  //   await queryRunner.connect();
  //   await queryRunner.startTransaction();

  //   try {
  //     // Insert data into Checkperiod (Header Table)
  //     await queryRunner.manager.save(Checkperiod, data);

  //     // Insert data into CheckperiodDetail using raw SQL
  //     await queryRunner.manager.query(`
  //       INSERT INTO tblCheck_Period_Detail (EDP_No, Status, halfName, workYear)
  //       SELECT A1.EDP_No, A1.AnnualCheckStatus, @0, @1
  //       FROM tblAssetMain AS A1 
  //       INNER JOIN tblMaster_SubCategory AS A2 
  //       ON A1.SubCategory = A2.SubCategory
  //       WHERE (A2.AnnualCheck = 1) 
  //       AND (A1.AnnualCheckStatus IN ('Ok', 'Wait')) 
  //       AND (A1.Status IN ('Active', 'In Stock'))
  //     `, [data.halfName, data.workYear]);

  //     await queryRunner.commitTransaction();

  //     return {
  //       status: "ok",
  //       msg: "Submit transaction successful",
  //     };
  //   } catch (error) {
  //     // Rollback transaction in case of failure
  //     await queryRunner.rollbackTransaction();
  //     throw new Error(`Transaction failed: ${error.message}`);
  //   } finally {
  //     await queryRunner.release();
  //   }
  // }

  async createHistoryTransaction(data: any) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
  
    try {

      await queryRunner.manager.query(`
        INSERT INTO tblCheck_Period_Detail (EDP_No, Status, HalfName, WorkYear)
        SELECT 
            A1.EDP_No,
            A1.AnnualCheckStatus,
            ? AS HalfName, -- ใช้ '?' เพื่อป้องกัน SQL Injection
            ? AS WorkYear
        FROM tblAssetMain AS A1
        INNER JOIN tblMaster_SubCategory AS A2 
            ON A1.SubCategory = A2.SubCategory
        WHERE 
            A2.AnnualCheck = 1
            AND A1.AnnualCheckStatus IN ('Ok', 'Wait')
            AND A1.Status IN ('Active', 'In Stock');
      `, [data.halfName, data.workYear]);
      // อัปเดต AnnualCheckStatus ใน tblAssetMain
      await queryRunner.manager.query(`
        UPDATE tblAssetMain
        SET AnnualCheckStatus = 'Wait'
        FROM tblAssetMain AS A1
        INNER JOIN tblMaster_SubCategory AS A2 
            ON A1.SubCategory = A2.SubCategory
        WHERE 
            A2.AnnualCheck = 1
            AND A1.AnnualCheckStatus IN ('Ok', 'Wait')
            AND A1.Status IN ('Active', 'In Stock');
      `);
  
      // เพิ่มข้อมูลลงใน tblCheck_Period_Detail
      
  
      // ยืนยัน Transaction
      await queryRunner.commitTransaction();
  
      return {
        status: "ok",
        msg: "Submit transaction successful",
      };
    } catch (error) {
      // Rollback ในกรณีเกิดข้อผิดพลาด
      await queryRunner.rollbackTransaction();
      throw new Error(`Transaction failed: ${error.message}`);
    } finally {
      await queryRunner.release();
    }
  }
  

}
