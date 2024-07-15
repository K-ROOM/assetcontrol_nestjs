import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('tblMaster_Status')
export class MasterStatus {
  @PrimaryColumn({ name: 'Status_No' })
  status_No: string;

  @Column({ name: 'Status_Process' })
  status_Process: string;

  @Column({ name: 'Remark' })
  remark: string;

  @Column({ name: 'Dec_TH' })
  dec_TH: string;

  @Column({ name: 'Dec_EN' })
  dec_EN: string;

  @Column({ name: 'AnnualCheckStatus' })
  annualCheckStatus: string;
  
}
