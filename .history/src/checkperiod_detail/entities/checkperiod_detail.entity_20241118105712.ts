import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Checkperiod } from './Checkperiod'; // อ้างอิงไปยัง Entity ที่เก็บ HalfName และ WorkYear

@Entity('tblCheck_Period_Detail')
export class CheckperiodDetail {
  @PrimaryGeneratedColumn()
  id: number; // ใช้ Id เป็น Auto Increment (Primary Key)

  @Column({ nullable: true })
  edpNo: string; // EDP_No คอลัมน์ varchar(255) ที่อนุญาตให้เป็น NULL

  @Column({ type: 'boolean', default: false })
  status: boolean; // Status เป็นประเภท BIT

  // กำหนด Foreign Key relationship กับ HalfName และ WorkYear
  @ManyToOne(() => Checkperiod, (checkperiod) => checkperiod.details, {
    nullable: false, // ไม่อนุญาตให้ NULL
  })
  @JoinColumn([
    { name: 'HalfName', referencedColumnName: 'halfName' },
    { name: 'WorkYear', referencedColumnName: 'workYear' },
  ])
  checkperiod: Checkperiod; // ความสัมพันธ์ไปยัง Checkperiod (entity ที่เก็บข้อมูล HalfName และ WorkYear)
}