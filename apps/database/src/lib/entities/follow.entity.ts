import { Entity, PrimaryColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Follow {
  @PrimaryColumn()
  follower_id!: number;

  @PrimaryColumn()
  followed_id!: number;

  @ManyToOne(() => User, user => user.followers)
  follower!: User;

  @ManyToOne(() => User, user => user.following)
  followed!: User;
}
