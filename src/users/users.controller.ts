import {Controller, Get } from "@nestjs/common";
import { UsersService } from './users.service';
import { ProfileService } from "../profile/profile.service";

@Controller('users')
export class UsersController {

  constructor(private readonly usersService: ProfileService) {}

  @Get()
  findAll(): string {
    return 'This action returns all users'
  }
}