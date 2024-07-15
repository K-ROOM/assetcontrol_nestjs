import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('tblMaster_Brand')
export class MasterBrand {

  @PrimaryColumn({ name: 'Brand' })
  brand: string;
  
}