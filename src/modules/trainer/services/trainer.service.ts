import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { TrainerDto } from '../dtos/trainer.dto';

@Injectable()
export default class TrainerService {
  constructor(private readonly prisma: PrismaService) {}

  async findOneByUserId(userId: string): Promise<TrainerDto> {
    return this.prisma.trainer.findFirst({ where: { userId } });
  }
}
