import { Module } from '@nestjs/common';
import { FollowModule } from './follow/follow.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from '@/database/src';
@Module({
  imports: [
    DatabaseModule,
    UserModule,
    FollowModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
