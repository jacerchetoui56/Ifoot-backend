import { ConflictException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'prisma/prisma.service';
import { CreatePlayerDto } from '../dtos/create-player.dto';
import { PlayerDto } from '../dtos/player.dto';

@Injectable()
export default class PlayerService {
  constructor(private readonly prisma: PrismaService) {}

  async findOneByUserId(userId: string): Promise<PlayerDto> {
    return this.prisma.player.findFirst({ where: { userId } });
  }

  async findOneById(profileId: string): Promise<PlayerDto> {
    return this.prisma.player.findFirst({ where: { id: profileId } });
  }

  async findOneByEmail(email: string): Promise<PlayerDto> {
    return this.prisma.player.findFirst({ where: { user: { email } } });
  }

  async create(createPlayerDto: CreatePlayerDto) {
    // : Promise<PlayerDto>
    const { email, password } = createPlayerDto;

    if (await this.prisma.user.findFirst({ where: { email } })) {
      throw new ConflictException('Email already used!');
    }

    const playerRole = await this.prisma.role.findFirst({
      where: { name: 'Player' },
    });

    const hashedPassword = await bcrypt.hash(password, 10);

    const playerUser = await this.prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
        roleId: playerRole.id,
      },
    });

    console.log('player user', playerUser);

    // const playerProfile = await this.prisma.player.create({
    //   data: {
    //     firstName: createPlayerDto.firstName,
    //     lastName: createPlayerDto.lastName,
    //     userId: playerUser.id,
    //   },
    // });

    // return playerProfile;
    return playerUser;
  }
}
