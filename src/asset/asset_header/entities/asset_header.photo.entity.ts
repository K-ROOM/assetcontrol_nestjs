import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Image {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    originalname: string;

    @Column()
    filename: string;

    @Column()
    path: string;
}