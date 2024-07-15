
import { Entity, Column, PrimaryColumn, ManyToMany, JoinTable } from 'typeorm';
import { Role } from './approle.entity';

@Entity('tblUser')
export class User {
  @PrimaryColumn({ name: 'UserID', length: 20 })
  userID: string;

  @Column({ name: 'Username', length: 20 })
  username: string;

  @Column({ name: 'Password' })
  password: string;

  @Column({ name: 'DivisionCode', length: 10 })
  divisionCode: string;

  @Column({ name: 'SectionCode', length: 10 })
  sectionCode: string;

  @Column({ name: 'SubSectionCode', length: 20 })
  subSectionCode: string;

  @Column({ name: 'PositionCode', length: 10 })
  positionCode: string;

  @Column({ name: 'BranchCode', length: 10 })
  branchCode: string;

  @Column({ name: 'FirstnameEN', length: 50 })
  firstnameEN: string;

  @Column({ name: 'LastnameEN', length: 50 })
  lastnameEN: string;

  @Column({ name: 'Email', length: 50 })
  email: string;

  @Column({ name: 'StartWorking' })
  startWorking: Date;

  @Column({ name: 'State', length: 50 })
  state: string;

  @Column({ name: 'Status', length: 50 })
  status: string;

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable({
    name: 'tblUser_AppRole',
    joinColumns: [
      {
        name: 'UserID',
        referencedColumnName: 'userID',
      },
    ],
    inverseJoinColumns: [
      { name: 'App', referencedColumnName: 'app' },
      { name: 'Role', referencedColumnName: 'role' },
    ],
  })
  roles?: Role[];
}
