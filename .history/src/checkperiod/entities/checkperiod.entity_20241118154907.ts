import { CheckperiodDetail } from 'src/checkperiod_detail/entities/checkperiod_detail.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';

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

  @Column({ default: false })
  uploaded: boolean = false;

  @OneToMany(() => CheckperiodDetail, (checkperiodDetail) => checkperiodDetail.checkperiod)
  checkperiodDetail: CheckperiodDetail[];
}
