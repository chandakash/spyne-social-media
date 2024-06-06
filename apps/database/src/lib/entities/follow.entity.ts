import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('follows')
export class Follow {
  @PrimaryColumn()
  follower_id!: number;

  @PrimaryColumn()
  followed_id!: number;

  @ManyToOne(() => User, user => user.followers)
  @JoinColumn({ name: 'follower_id' })
  follower!: User;

  @ManyToOne(() => User, user => user.following)
  @JoinColumn({ name: 'followed_id' })
  followed!: User;
}
