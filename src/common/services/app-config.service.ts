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

  get databaseConfig() {
    return {
      databaseUrl: this.getString('DATABASE_URL'),
    };
  }
}
