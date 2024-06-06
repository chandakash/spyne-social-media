import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {User} from "./user.entity"
@Entity('discussions')
export class Discussion {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User)
  user!: User;

  @Column()
  text!: string;

  @Column({ nullable: true })
  image_url!: string;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
