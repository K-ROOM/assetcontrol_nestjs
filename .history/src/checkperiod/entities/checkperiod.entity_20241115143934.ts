import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('tblCheck_Period')
export class Checkperiod {
  @PrimaryColumn({ name: 'HalfName' })
  halfName: string;

  @PrimaryColumn({ name: 'WorkYear' })
  workYear: string;

  @Column({ type: 'date' })
  endDate: string;

  @Column({ name: 'Ok' })
  ok: number;

  @Column({ type: 'date' })
  startDate: string;

  @Column({ name: 'Wait' })
  wait: number;

  @Column({ name: 'AttachSSD', default: false })
  attachSSD: boolean = false;
}
