import { Injectable } from '@nestjs/common';
import { CreateCheckperiodDto } from './dto/create-checkperiod.dto';
import { UpdateCheckperiodDto } from './dto/update-checkperiod.dto';
import { Checkperiod } from './entities/checkperiod.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CheckperiodService {
  constructor(
    @InjectRepository(Checkperiod)
    private readonly checkPeriodRepository: Repository<Checkperiod>,
  ) { }

  create(createCheckperiodDto: CreateCheckperiodDto) {
    return this.checkPeriodRepository.save(createCheckperiodDto);
  }

  findAll() {
    return `This action returns all checkperiod`;
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

  async createHistoryTransaction(data: any) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await queryRunner.manager.query(`DELETE FROM RMS_Children WHERE (RecruitmentID = '${recruitmentID}')`);
      await queryRunner.manager.save(RmsChildren, data.rmsChildren);

      await queryRunner.manager.query(`DELETE FROM RMS_Sibling WHERE (RecruitmentID = '${recruitmentID}')`);
      await queryRunner.manager.save(RmsSibling, data.rmsSibling);

      await queryRunner.manager.update(RmsHeader, recruitmentID, data.header);

      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();
      throw new Error('Transaction failed');
    } finally {
      await queryRunner.release();
      return {
        "status": "ok", "msg": "submit transaction successful",
      }
    }
  }
}
