import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import AuthModule from './auth/auth.module';
import { AppConfigService } from 'src/common/services/app-config.service';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        DATABASE_URL: Joi.string().required(),
        NODE_ENV: Joi.string(),
      }),
    }),
    AuthModule,
    PrismaModule,
  ],
  providers: [AppConfigService],
})
export class CommonModule {}
