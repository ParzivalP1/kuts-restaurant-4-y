import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PostsModule } from './posts/posts.module';
import { ProfileModule } from './profile/profile.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PostsModule, ProfileModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
