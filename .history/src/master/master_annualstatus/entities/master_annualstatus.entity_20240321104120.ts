import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('tblMaster_Annual')
export class MasterAnnualstatus {

  @PrimaryColumn({ name: 'antivirusVersion' })
  antivirusVersion: string;

  @Column({ name: 'antivirusDescription' })
  antivirusDescription: string;

  @Column({ name: 'remark' })
  remark: string;

  @Column({ name: 'status' })
  status: Boolean;
  
}
