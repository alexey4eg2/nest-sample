import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import User from '../domain/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':email')
  async getUser(@Param() params: { email: string }): Promise<User | undefined> {
    const user = await this.usersService.getUser(params.email);
    return user;
  }
}
