import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from '../domain/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>) {
  }

  async getUser(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: {
        Email: email,
      },
    });
  }
}
