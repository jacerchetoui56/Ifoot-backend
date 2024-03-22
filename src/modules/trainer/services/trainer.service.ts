import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { TrainerDto } from '../dtos/trainer.dto';
import { CreateTrainerDto } from '../dtos/creaet-trainer.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export default class TrainerService {
  constructor(private readonly prisma: PrismaService) {}

  async findOneByUserId(userId: string): Promise<TrainerDto> {
    return this.prisma.trainer.findFirst({ where: { userId } });
  }

  async findOneById(profileId: string): Promise<TrainerDto> {
    return this.prisma.trainer.findFirst({ where: { id: profileId } });
  }

  async findOneByEmail(email: string): Promise<TrainerDto> {
    return this.prisma.trainer.findFirst({ where: { user: { email } } });
  }

  async create(createTrainerDto: CreateTrainerDto): Promise<TrainerDto> {
    const { email, password } = createTrainerDto;

    if (await this.prisma.user.findFirst({ where: { email } })) {
      throw new ConflictException('Email already used!');
    }

    const trainerRole = await this.prisma.role.findFirst({
      where: { name: 'Trainer' },
    });

    const hashedPassword = await bcrypt.hash(password, 10);

    const trainerUser = await this.prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
        roleId: trainerRole.id,
      },
    });

    const trainerProfile = await this.prisma.trainer.create({
      data: {
        firstName: createTrainerDto.firstName,
        lastName: createTrainerDto.lastName,
        userId: trainerUser.id,
        teamId: createTrainerDto.teamId,
      },
    });

    return trainerProfile;
  }
}
