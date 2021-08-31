import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { join } from 'path';

@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.db',
    entities: [join(__dirname, '/**/*.entity{.js,.ts}')],
    synchronize: true,
    verboseRetryLog: true,
  }), UsersModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
