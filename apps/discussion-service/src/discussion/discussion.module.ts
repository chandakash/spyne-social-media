import { Module } from '@nestjs/common';
import { DiscussionService } from './discussion.service';
import { DiscussionController } from './discussion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Discussion } from '@/database/src';

@Module({
  controllers: [DiscussionController],
  providers: [DiscussionService],
  imports: [TypeOrmModule.forFeature([Discussion])],
  exports: [DiscussionService],
})
export class DiscussionModule {}
