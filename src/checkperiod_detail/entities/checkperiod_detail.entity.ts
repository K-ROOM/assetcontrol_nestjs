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

  @Column({ nullable: true })
  edp_No: string; // EDP_No คอลัมน์ varchar(255) ที่อนุญาตให้เป็น NULL

  @Column({ default: false })
  status: string; // Status เป็นประเภท BIT

  // กำหนด Foreign Key relationship กับ HalfName และ WorkYear
  @ManyToOne(() => Checkperiod, (checkperiod) => checkperiod.checkperiodDetail, {
    nullable: false, // ไม่อนุญาตให้ NULL
  })
  @JoinColumn([
    { name: 'HalfName', referencedColumnName: 'halfName' },
    { name: 'WorkYear', referencedColumnName: 'workYear' },
  ])
  checkperiod: Checkperiod; // ความสัมพันธ์ไปยัง Checkperiod (entity ที่เก็บข้อมูล HalfName และ WorkYear)
}