import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('tblMaster_SubCategory')
export class Checkperiod {
  @PrimaryColumn({ name: 'halfName' })
  subCategory: string;

  @Column({ name: 'Category' })
  category: string;

  @Column({ name: 'Sub_Code' })
  sub_Code: string;

  @Column({ name: 'Running' })
  running: string;

  @Column({ name: 'AnnualCheck' })
  annualCheck: boolean;

  @Column({ name: 'AssignableIP' })
  assignableIP: boolean;
  
}
