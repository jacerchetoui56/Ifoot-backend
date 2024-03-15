import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  static exclude<T, Key extends keyof T>(value: T, keys: Key[]): Omit<T, Key> {
    for (const key of keys) {
      delete value[key];
    }
    return value;
  }
}
