import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { PlayerDto } from '../dtos/player.dto';

@Injectable()
export default class PlayerService {
  constructor(private readonly prisma: PrismaService) {}

  async findOneByUserId(userId: string): Promise<PlayerDto> {
    return this.prisma.player.findFirst({ where: { userId } });
  }
}
