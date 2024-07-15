import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity('MasterOSKeyType')
export class MasterLicense {

  @PrimaryColumn({ name: 'OSKey' })
  osKey: string;

  @Column({ name: 'OSLicenseType' })
  osLicenseType: string;

  @Column({ name: 'Status' })
  status: string;
  
}

