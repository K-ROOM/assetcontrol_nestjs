import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('tblMaster_Branch')
export class MasterBranch {

  @PrimaryColumn({ name: 'BranchCode' })
  branchCode: string;

  @Column({ name: 'Description' })
  description: string;
  
}
