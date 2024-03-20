import { Module } from '@nestjs/common';
import TrainerService from './services/trainer.service';

@Module({
  providers: [TrainerService],
  exports: [TrainerService],
  controllers: [],
  imports: [],
})
export class TrainerModule {}
