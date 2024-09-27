import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('MasterOSKeyType')
export class MasterOskey {

  @PrimaryColumn({ name: 'OSKey' })
  osKey: string;

  @Column({ name: 'OSLicenseType' })
  osLicenseType: string;

  @Column({ name: 'Status' })
  status: string;
  
}