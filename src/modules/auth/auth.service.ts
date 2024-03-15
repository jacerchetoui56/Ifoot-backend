import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export default class AuthService {
  constructor(private readonly prisma: PrismaService) {}
  async login() {
    return 'login';
  }
}
