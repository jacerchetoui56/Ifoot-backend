import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { UserDto } from '../dtos/user.dto';
import { CreateUserDto } from '../dtos/create-user.dto';
import * as bcrypt from 'bcrypt';
import { AuthDto } from 'src/modules/auth/dtos/auth.dto';

@Injectable()
export default class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<UserDto[]> {
    return this.prisma.user.findMany();
  }

  async findOneById(id: string): Promise<UserDto> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async create(data: CreateUserDto): Promise<UserDto> {
    return this.prisma.user.create({ data });
  }

  async validateUser(credentials: AuthDto): Promise<UserDto> {
    const { email, password } = credentials;
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (user && passwordMatch) {
      return user;
    }

    return null;
  }
}
