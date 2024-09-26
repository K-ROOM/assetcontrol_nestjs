export class MasterOskey {}

import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('MasterOSLicenseType')
export class MasterOslicensetype {

  @PrimaryColumn({ name: 'OSLicenseType' })
  osLicenseType: string;

  @Column({ name: 'OS' })
  os: string;

  @Column({ name: 'OSLicenseKey' })
  osLicenseKey: string;

  @Column({ name: 'Total' })
  total: Number;
  
}