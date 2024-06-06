import { Follow } from '@/database/src';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FollowService {
  constructor(
    @InjectRepository(Follow)
    private followRepository: Repository<Follow>,
  ) {}

  async follow(follower_id: number, followed_id: number): Promise<void> {
    const follow = new Follow();
    follow.follower_id = follower_id;
    follow.followed_id = followed_id;
    await this.followRepository.save(follow);
  }

  async unfollow(follower_id: number, followed_id: number): Promise<void> {
    await this.followRepository.delete({ follower_id, followed_id });
  }
}
