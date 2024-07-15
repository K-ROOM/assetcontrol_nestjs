import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('tblMaster_Model')
export class MasterModel {
  @PrimaryColumn({ name: 'Model' })
  model: string;

  @Column({ name: 'SubCategory' })
  subCategory: string;

  @Column({ name: 'Brand' })
  brand: string;
  
}
