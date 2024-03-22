import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { PrismaModule } from 'prisma/prisma.module';
import { SeederModule } from 'src/common/modules/seeder/seeder.module';
import { AppConfigService } from 'src/common/services/app-config.service';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().required(),
        NODE_ENV: Joi.string(),
        JWT_ACCESS_SECRET: Joi.string().required(),
        JWT_REFRESH_SECRET: Joi.string().required(),
        JWT_ACCESS_EXPIRES_IN: Joi.string().required(),
        JWT_REFRESH_EXPIRES_IN: Joi.string().required(),
        BCRYPT_SALT_ROUNDS: Joi.number().required(),
        SEED_ON_STARTUP: Joi.boolean().required(),
        OWNER_EMAIL: Joi.string().email().required(),
        OWNER_PHONE: Joi.string().required(),
        OWNER_PASSWORD: Joi.string().required(),
        OWNER_FIRSTNAME: Joi.string().required(),
        OWNER_LASTNAME: Joi.string().required(),
      }),
    }),
    SeederModule,
    PrismaModule,
  ],
  exports: [AppConfigService],
  providers: [AppConfigService],
})
export class CommonModule {}
