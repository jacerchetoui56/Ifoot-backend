import { Module } from '@nestjs/common';
import SeederService from './services/seed.service';

@Module({
  providers: [SeederService],
})
export class SeederModule {}
