import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('MasterOS')
export class MasterOS {

  @PrimaryColumn({ name: 'OS' })
  os: string;

}

