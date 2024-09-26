import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('MasterOSLicenseType')
export class MasterOskey {

  @PrimaryColumn({ name: 'OSKey' })
  osKey: string;

  @Column({ name: 'OSLicenseType' })
  osLicenseType: string;

  @Column({ name: 'OSLicenseKey' })
  osLicenseKey: string;
  
}