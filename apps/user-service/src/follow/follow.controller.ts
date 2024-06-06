import { Controller, Post, Delete, Param } from '@nestjs/common';
import { FollowService } from './follow.service';

@Controller('follow')
export class FollowController {
  constructor(private readonly followService: FollowService) {}

  @Post(':follower_id/:followed_id')
  follow(@Param('follower_id') follower_id: number, @Param('followed_id') followed_id: number) {
    return this.followService.follow(follower_id, followed_id);
  }

  @Delete(':follower_id/:followed_id')
  unfollow(@Param('follower_id') follower_id: number, @Param('followed_id') followed_id: number) {
    return this.followService.unfollow(follower_id, followed_id);
  }
}
