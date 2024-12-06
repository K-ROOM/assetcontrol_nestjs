import { Injectable } from '@nestjs/common';
import { CreateIpHeaderDto } from './dto/create-ip_header.dto';
import { UpdateIpHeaderDto } from './dto/update-ip_header.dto';
import { IpHeader } from './entities/ip_header.entity';
import { Repository } from 'typeorm/repository/Repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AssetHeader } from 'src/asset/asset_header/entities/asset_header.entity';

@Injectable()
export class IpHeaderService {
  constructor(
    @InjectRepository(IpHeader)
    private readonly ipRepository: Repository<IpHeader>,
  ) { }

  create(createIpHeaderDto: CreateIpHeaderDto) {
    return 'This action adds a new ipHeader';
  }

  findAll() {
    return this.ipRepository.find();
  }

  async findAllWithASC() {
    return await this.ipRepository
      .createQueryBuilder('ipHeader')
      .select([
        'ipHeader.ip1 AS ip1',
        'ipHeader.ip2 AS ip2',
        'ipHeader.ip3 AS ip3',
        'ipHeader.ip4 AS ip4',
        'ipHeader.vLanNo AS vLanNo',
        'ipHeader.branchCode AS branchCode',
        'ipHeader.subSectionCode AS subSectionCode',
        'ipHeader.sectionCode AS sectionCode',
        'ipHeader.status AS status',
        'ipHeader.edp_No AS edp_No'
      ])
      .orderBy('ipHeader.branchCode', 'ASC')
      .addOrderBy('ipHeader.ip4', 'ASC')
      .getRawMany();
  }

  async findAllSelectColWithBranchCode(branchCode): Promise<any[]> {
    return await this.ipRepository
      .createQueryBuilder('ipHeader')
      .leftJoinAndSelect('ipHeader.assetHeader', 'assetHeader')
      .select([
        'ipHeader.ip1 AS ip1',
        'ipHeader.ip2 AS ip2',
        'ipHeader.ip3 AS ip3',
        'ipHeader.ip4 AS ip4',
        'ipHeader.status AS status',
        'assetHeader.edp_No AS edp_No',
      ])
      .where('ipHeader.branchCode = :branchCode', { branchCode })
      .orderBy('ipHeader.ip4', 'ASC')
      .getRawMany();
  }

  // findIPByEdpNo(edp_No: string) {
  //   return this.ipRepository.find({
  //     where: {
  //       assetHeader: {
  //         edp_No: edp_No,
  //       },
  //     }
  //   });
  // }

  findOne(ip1: number, ip2: number, ip3: number, ip4: number) {
    return this.ipRepository.findOne({
      where: {
        ip1: ip1,
        ip2: ip2,
        ip3: ip3,
        ip4: ip4,
      },
      // relations: {
      //   assetHeader: true,
      // },
    });
  }

  update(ip1: number, ip2: number, ip3: number, ip4: number, edp_No: string) {
    const entityManager = this.ipRepository.manager
    return this.ipRepository.query(`
    UPDATE tblIPAddress_Status
    SET EDP_No = '${edp_No}'
    WHERE (IP1 = ${ip1}) AND (IP2 = ${ip2}) AND (IP3 = ${ip3}) AND (IP4 = ${ip4})`);
  }

  // async update(ip1: number, ip2: number, ip3: number, ip4: number, edp_No: string) {
  //   await this.ipRepository.createQueryBuilder()
  //     .update('tblIPAddress_Status')
  //     .set({ EDP_No: edp_No })
  //     .where('IP1 = :ip1', { ip1 })
  //     .andWhere('IP2 = :ip2', { ip2 })
  //     .andWhere('IP3 = :ip3', { ip3 })
  //     .andWhere('IP4 = :ip4', { ip4 })
  //     .execute();
  // }

  remove(id: number) {
    return `This action removes a #${id} ipHeader`;
  }

  findCountBranchCode() {
    const entityManager = this.ipRepository.manager
    return this.ipRepository.query(`
    SELECT tblIPAddress_Status_1.BranchCode AS BranchCodeH, COUNT(tblIPAddress_Status_1.BranchCode) AS IPCount, tblMaster_Branch.BranchCode, tblMaster_Branch.Description,
    (SELECT COUNT(Status) AS active FROM tblIPAddress_Status WHERE (BranchCode = tblMaster_Branch.BranchCode) AND (Status = 'Active')) AS active,
    (SELECT COUNT(Status) AS empty FROM tblIPAddress_Status AS tblIPAddress_Status_2 WHERE (BranchCode = tblMaster_Branch.BranchCode) AND (Status = 'Empty')) AS empty
    FROM tblIPAddress_Status AS tblIPAddress_Status_1 INNER JOIN tblMaster_Branch ON tblIPAddress_Status_1.BranchCode = tblMaster_Branch.BranchCode
    GROUP BY tblIPAddress_Status_1.BranchCode, tblMaster_Branch.BranchCode, tblMaster_Branch.Description`);
  }
}
