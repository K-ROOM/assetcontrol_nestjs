import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('tblMaster_OfficeVersion')
export class MasterOfficeversion {

  @PrimaryColumn({ name: 'OfficeVersion' })
  officeVersion: string;
  
}

