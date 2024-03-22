import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NodeEnvEnum } from '../enums/node-env.enum';

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService) {}

  private getString(key: string): string {
    return this.configService.get<string>(key)?.toString()?.trim();
  }

  private getNumber(key: string): number {
    return Number(this.getString(key));
  }

  private getBoolean(key: string): boolean {
    const res = this.configService.get<boolean>(key);
    if (typeof res === 'boolean') return res;
    switch (
      this.configService.get<boolean>(key)?.toString()?.toLowerCase()?.trim()
    ) {
      case 'true':
      case 'yes':
      case '1':
        return true;

      default:
        return false;
    }
  }

  get nodeEnv(): string {
    return this.getString('NODE_ENV');
  }

  get isDevelopment(): boolean {
    return this.nodeEnv === NodeEnvEnum.dev;
  }

  get isProduction(): boolean {
    return this.nodeEnv === NodeEnvEnum.prod;
  }

  get appConfig() {
    return {
      port: this.getNumber('PORT') || 3000,
      nodeEnv: this.getString('NODE_ENV') || 'development',
    };
  }

  get seedConfig() {
    return {
      enable: this.getBoolean('SEED_ON_STARTUP') || false,
      ownerEmail: this.getString('OWNER_EMAIL'),
      ownerFirstName: this.getString('OWNER_FIRSTNAME'),
      ownerLastName: this.getString('OWNER_LASTNAME'),
      ownerPassword: this.getString('OWNER_PASSWORD'),
    };
  }

  get authConfig() {
    return {
      bcryptSaltRounds: this.getNumber('BCRYPT_SALT_ROUNDS') || 10,
      jwtAccessSecret:
        this.getString('JWT_ACCESS_SECRET') || 'SuperDuperSecret111$',
      jwtAccessExpiresIn: this.getString('JWT_ACCESS_EXPIRES_IN') || '60d',
      jwtRefreshSecret:
        this.getString('JWT_REFRESH_SECRET') || 'SuperDuperSecret111$',
      jwtRefreshExpiresIn: this.getString('JWT_REFRESH_EXPIRES_IN') || '60d',
    };
  }

  get databaseConfig() {
    return {
      databaseUrl: this.getString('DATABASE_URL'),
    };
  }
}
