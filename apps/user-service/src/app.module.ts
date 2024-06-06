import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
// import { DatabaseModule } from '@spyne-social-media/database';
import { FollowModule } from './follow/follow.module';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        ssl: {
          rejectUnauthorized: true,
        },
        // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        entities: [User],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UserModule,
    FollowModule
  ],
    controllers: [],
  providers: [],
})

export class AppModule {}

