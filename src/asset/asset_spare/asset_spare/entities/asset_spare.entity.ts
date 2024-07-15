import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('tblSpareParts')
export class AssetSpare {
  @PrimaryColumn({ name: 'EDP_No', length: 255 })
  edp_No: string;

  @Column({ name: 'Brand', length: 255 })
  brand: string;

  @Column({ name: 'BranchCode', length: 255 })
  branchCode: string;

  @Column({ name: 'Category', length: 255 })
  category: string;

  @Column({ name: 'InputUser', length: 255 })
  inputUser: string;

  @Column({ name: 'Model', length: 255 })
  model: string;

  @Column({ name: 'ModifiedBy', length: 255 })
  modifiedBy: string;

  @Column({ name: 'Remark', length: 255 })
  remark: string;

  @Column({ name: 'Serial', length: 255 })
  serial: string;

  @Column({ name: 'Status', length: 255 })
  status: string;

  @Column({ name: 'SubCategory', length: 255 })
  subCategory: string;

  @Column({ name: 'UserID', length: 255 })
  userID: string;

  @Column({ name: 'UserName', length: 255 })
  userName: string;

  @Column({ name: 'FIN_No', length: 255 })
  fin_No: string;
}