import { Checkperiod } from 'src/checkperiod/entities/checkperiod.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('tblCheck_Period_Detail')
export class CheckperiodDetail {
  @PrimaryGeneratedColumn()
  id: number; // ใช้ Id เป็น Auto Increment (Primary Key)

  @Column({ name == 'EDP_No',nullable: true })
  edp_No: string;

  @Column({ type: 'boolean', default: false })
  status: boolean;

  // กำหนด Foreign Key relationship กับ HalfName และ WorkYear
  @ManyToOne(() => Checkperiod, (checkperiod) => checkperiod.details, {
    nullable: false, // ไม่อนุญาตให้ NULL
  })
  @JoinColumn([
    { name: 'HalfName', referencedColumnName: 'halfName' },
    { name: 'WorkYear', referencedColumnName: 'workYear' },
  ])
  checkperiod: Checkperiod;
}