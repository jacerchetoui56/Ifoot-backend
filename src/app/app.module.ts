import { Module } from '@nestjs/common';
import { CommonModule } from 'src/common/common.module';
import { AdminModule } from 'src/modules/admin/admin.module';
import AuthModule from 'src/modules/auth/auth.module';
import { PlayerModule } from 'src/modules/player/player.module';
import { TrainerModule } from 'src/modules/trainer/trainer.module';
import { UserModule } from 'src/modules/user/user.module';

@Module({
  imports: [
    CommonModule,
    AuthModule,
    UserModule,
    AdminModule,
    PlayerModule,
    TrainerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
