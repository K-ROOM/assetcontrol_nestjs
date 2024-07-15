import { AssetHeader } from 'src/asset/asset_header/entities/asset_header.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('tblIPAddress_Status')
export class IpHeader {
  @PrimaryColumn({ name: 'IP1' })
  ip1: number;

  @PrimaryColumn({ name: 'IP2' })
  ip2: number;

  @PrimaryColumn({ name: 'IP3' })
  ip3: number;

  @PrimaryColumn({ name: 'IP4' })
  ip4: number;

  @Column({ name: 'VLanNo' })
  vLanNo: string;

  @Column({ name: 'BranchCode' })
  branchCode: string;

  @Column({ name: 'SubSectionCode' })
  subSectionCode: string;

  @Column({ name: 'SectionCode' })
  sectionCode: string;

  @Column({ name: 'Status' })
  status: string;
  
  @ManyToOne(() => AssetHeader, (assetHeader) => assetHeader.ipHeader)
  @JoinColumn([
    { name: 'EDP_No', referencedColumnName: 'edp_No' },
  ])
  assetHeader: AssetHeader;
}
