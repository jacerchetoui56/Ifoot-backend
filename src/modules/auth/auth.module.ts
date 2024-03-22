import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AdminModule } from '../admin/admin.module';
import { PlayerModule } from '../player/player.module';
import { TrainerModule } from '../trainer/trainer.module';
import { UserModule } from '../user/user.module';
import AuthController from './controllers/auth.controller';
import AuthService from './services/auth.service';
import { RoleModule } from '../role/role.module';
import RoleController from './controllers/role.controller';

@Module({
  imports: [
    UserModule,
    AdminModule,
    PlayerModule,
    TrainerModule,
    RoleModule,
    JwtModule.register({
      global: true,
    }),
  ],
  controllers: [AuthController, RoleController],
  providers: [AuthService],
})
export default class AuthModule {}
