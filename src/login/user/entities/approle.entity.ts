import { Entity, ManyToMany, PrimaryColumn } from 'typeorm';
import { User } from 'src/login/user/entities/user.entity';

@Entity('tblAppRole')
export class Role {

  @PrimaryColumn({
    name : 'App',
    length: 20
  })
  app: string;

  @PrimaryColumn({
    name : 'Role',
    length: 20
  })
  role: string;

  @ManyToMany(
    () => User,
    user => user.roles,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION',},
  )
  users?: User[];
}