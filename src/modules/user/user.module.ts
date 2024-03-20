import { Module } from '@nestjs/common';
import UserService from './services/user.service';

@Module({
  providers: [UserService],
  exports: [UserService],
  controllers: [],
  imports: [],
})
export class UserModule {}
