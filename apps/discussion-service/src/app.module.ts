import { DatabaseModule } from '@/database/src';
import { Module } from '@nestjs/common';
import { DiscussionModule } from './discussion/discussion.module';

@Module({
  imports: [
    DatabaseModule, DiscussionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
