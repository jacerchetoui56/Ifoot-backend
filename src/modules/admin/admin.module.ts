import { Module } from '@nestjs/common';
import AdminService from './services/admin.service';

@Module({
  providers: [AdminService],
  exports: [],
  controllers: [],
  imports: [],
})
export class AdminModule {}
