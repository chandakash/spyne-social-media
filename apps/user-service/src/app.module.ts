import { DatabaseModule } from '@/database/src';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { FollowModule } from './follow/follow.module';
import { UserModule } from './user/user.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
    }),
    DatabaseModule,
    UserModule,
    FollowModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
