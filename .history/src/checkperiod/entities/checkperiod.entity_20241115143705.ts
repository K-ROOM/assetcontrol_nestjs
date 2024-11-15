import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('tblCheck_Period')
export class Checkperiod {
  @PrimaryColumn({ name: 'HalfName' })
  halfName: string;

  @PrimaryColumn({ name: 'WorkYear' })
  workYear: string;

  @Column({ name: 'EndDate' })
  endDate: string;

  @Column({ name: 'Sub_Code' })
  sub_Code: string;

  @Column({ name: 'Running' })
  running: string;

  @Column({ name: 'AnnualCheck' })
  annualCheck: boolean;

  @Column({ name: 'AssignableIP' })
  assignableIP: boolean;
  
}
