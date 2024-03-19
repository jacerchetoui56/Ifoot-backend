import { Module } from '@nestjs/common';
import TrainerService from './services/trainer.service';

@Module({
  providers: [TrainerService],
  exports: [],
  controllers: [],
  imports: [],
})
export class TrainerModule {}
