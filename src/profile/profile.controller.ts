import {Controller, Get } from "@nestjs/common";
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {

  constructor(private readonly profileService: ProfileService) {}

  // @Get(':username')
  // async getProfile(@User('id') userId: number, @Param('username') username: string): Promise<ProfileRO> {
  //   return await this.profileService.findProfile(userId, username);
  // }
  //
  // @Post(':username/follow')
  // async follow(@User('email') email: string, @Param('username') username: string): Promise<ProfileRO> {
  //   return await this.profileService.follow(email, username);
  // }
}