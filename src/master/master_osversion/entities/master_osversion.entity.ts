import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('MasterOSVersion')
export class MasterOsversion {

  @PrimaryColumn({ name: 'OSVersion' })
  osVersion: string;

  @Column({ name: 'OS' })
  os: string;

}