import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('MasterOSLicenseType')
export class MasterOskey {

  @PrimaryColumn({ name: 'OSKey' })
  osKey: string;

  @Column({ name: 'OS' })
  os: string;

  @Column({ name: 'OSLicenseKey' })
  osLicenseKey: string;
  
}