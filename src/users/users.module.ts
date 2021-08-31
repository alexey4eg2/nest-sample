import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import User from '../domain/user.entity';
import {UsersController} from "./users.controller";
import {UsersService} from "./users.service";
import {join} from "path";


@Module({
  imports: [ TypeOrmModule.forFeature([User]) ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
