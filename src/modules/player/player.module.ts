import { Module } from '@nestjs/common';
import PlayerService from './services/player.service';

@Module({
  providers: [PlayerService],
  exports: [],
  controllers: [],
  imports: [],
})
export class PlayerModule {}
