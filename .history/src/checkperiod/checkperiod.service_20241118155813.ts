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
    const entityManager = this.checkPeriodRepository.manager
    return this.checkPeriodRepository.query(`INSERT INTO tblCheck_Period_Detail (EDP_No, Status, halfName, workYear)
        SELECT A1.EDP_No, A1.AnnualCheckStatus, ${data.halfName}, ${data.workYear} FROM 
            tblAssetMain AS A1 
            INNER JOIN tblMaster_SubCategory AS A2 
            ON A1.SubCategory = A2.SubCategory
        WHERE 
            (A2.AnnualCheck = 1) 
            AND (A1.AnnualCheckStatus IN ('Ok', 'Wait')) 
            AND (A1.Status IN ('Active', 'In Stock'));
        `);
  }

}
