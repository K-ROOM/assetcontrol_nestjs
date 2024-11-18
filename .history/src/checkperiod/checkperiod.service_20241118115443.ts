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
      await queryRunner.manager.save(CheckperiodDetail, data.check);

      await queryRunner.manager.save(Checkperiod, data.header);

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
