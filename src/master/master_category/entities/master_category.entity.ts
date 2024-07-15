import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('tblMaster_Category')
export class MasterCategory {

  @PrimaryColumn({ name: 'Category' })
  category: string;

}
