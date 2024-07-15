import { IpHeader } from 'src/asset/ip_header/ip_header/entities/ip_header.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';

@Entity('tblAssetMain')
export class AssetHeader {
  @PrimaryColumn({ name: 'EDP_No', length: 255 })
  edp_No: string;

  @Column({ name: 'BranchCode', length: 255 })
  branchCode: string;

  @Column({ name: 'Category', length: 255 })
  category: string;

  @Column({ name: 'FIN_No', length: 255 })
  fin_No: string;

  @Column({ name: 'InputUser', length: 255 })
  inputUser: string;

  @Column({ name: 'Model', length: 255 })
  model: string;

  @Column({ name: 'Remark', length: 255 })
  remark: string;

  @Column({ name: 'Serial', length: 255 })
  serial: string;

  @Column({ name: 'SubCategory', length: 255 })
  subCategory: string;

  @Column({ name: 'UserName', length: 255 })
  userName: string;

  @Column({ name: 'Status', length: 255 })
  status: string;

  @Column({ name: 'UserID', length: 255 })
  userID: string;

  @Column({ type: 'date' })
  firstCheck: string;

  @Column({ type: 'date' })
  lastCheck: string;

  @Column({ name: 'OS', length: 255 })
  os: string;

  @Column({ name: 'OSKey', length: 255 })
  osKey: string;

  @Column({ name: 'OSLicenseType', length: 255 })
  osLicenseType: string;

  @Column({ name: 'OSVersion', length: 255 })
  osVersion: string;

  @Column({ name: 'AnnualCheckStatus', length: 255 })
  annualCheckStatus: string;

  @Column({ name: 'Antivirus', length: 255 })
  antivirus: string;

  @Column({ type: 'date' })
  po_Date: string;

  @Column({ name: 'AntivirusNote', length: 255 })
  antivirusNote: string;

  @Column({ name: 'OfficeVersion', length: 255 })
  officeVersion: string;

  @Column({ name: 'PO_No', length: 255 })
  po_No: string;

  @Column({ name: 'Location', length: 255 })
  location: string;

  @Column({ name: 'WarrantyPeriod', length: 255 })
  warrantyPeriod: string;

  @Column({ name: 'ModifiedBy', length: 255 })
  modifiedBy: string;

  @Column({ name: 'Brand', length: 255 })
  brand: string;

  @Column({ name: 'IsSATA' })
  isSATA: boolean = false;

  @Column({ name: 'AttachSSD', default: false })
  attachSSD: boolean = false;

  @OneToMany(() => IpHeader, (ipHeader) => ipHeader.assetHeader, { eager: true, cascade: true })
  ipHeader: IpHeader[];
}
