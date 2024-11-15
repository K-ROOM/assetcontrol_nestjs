import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('tblCheck_Period')
export class Checkperiod {
  @PrimaryColumn()
  halfName: string;

  @PrimaryColumn()
  workYear: string;

  @Column({ type: 'date' })
  endDate: string;

  @Column({ name: 'Ok' })
  ok: number;

  @Column({ type: 'date' })
  startDate: string;

  @Column({ name: 'Wait' })
  wait: number;

  @Column({ name: 'Uploaded', default: false })
  uploaded: boolean = false;
}
