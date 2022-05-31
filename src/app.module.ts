import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ProfileModule } from './profile/profile.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ProfileModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
