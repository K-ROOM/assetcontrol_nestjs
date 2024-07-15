import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('tblMaster_AnnualChkStatus')
export class MasterAnnualstatus {

  @PrimaryColumn({ name: 'Status' })
  status: string;

  @Column({ name: 'Description' })
  description: string;
  
}
