import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import AuthModule from './auth/auth.module';
import { AppConfigService } from 'src/common/services/app-config.service';
import { PrismaModule } from 'prisma/prisma.module';
import { SeederModule } from 'src/common/modules/seeder/seeder.module';
import { ScopeModule } from './scope/scope.module';
import { RoleModule } from './role/role.module';
import { PermissionModule } from './permission/permission.module';
import { AdminModule } from './admin/admin.module';
import { TrainerModule } from './trainer/trainer.module';
import { PlayerModule } from './player/player.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().required(),
        NODE_ENV: Joi.string(),
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRES_IN: Joi.string().required(),
        BCRYPT_SALT_ROUNDS: Joi.number().required(),
        SEED_ON_STARTUP: Joi.boolean().required(),
        OWNER_EMAIL: Joi.string().email().required(),
        OWNER_PHONE: Joi.string().required(),
        OWNER_NAME: Joi.string().required(),
        OWNER_PASSWORD: Joi.string().required(),
      }),
    }),
    AuthModule,
    PrismaModule,
    SeederModule,
    ScopeModule,
    RoleModule,
    PermissionModule,
    AdminModule,
    TrainerModule,
    PlayerModule,
  ],
  providers: [AppConfigService],
})
export class CommonModule {}
