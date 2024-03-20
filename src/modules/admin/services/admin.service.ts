import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateAdminDto } from '../dtos/create-admin.dto';
import { AdminDto } from '../dtos/admin.dto';
import { UpdateAdminDto } from '../dtos/update-admin.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export default class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  async createSystem(createAdminDto: CreateAdminDto): Promise<AdminDto> {
    const { email, password, roleId } = createAdminDto;

    if (await this.prisma.user.findFirst({ where: { email } })) {
      throw new ConflictException('Email already used!');
    }

    const role = await this.prisma.role.findFirst({ where: { id: roleId } });

    if (!role) {
      throw new NotFoundException('Role not found!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const adminUser = await this.prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
      },
    });
    const adminProfile = await this.prisma.admin.create({
      data: {
        firstName: createAdminDto.firstName,
        lastName: createAdminDto.lastName,
        userId: adminUser.id,
      },
    });

    return adminProfile;
  }

  async findOneByEmail(email: string): Promise<AdminDto> {
    return this.prisma.admin.findFirst({ where: { user: { email } } });
  }
  async updateSystemOneById(updateAdminDto: UpdateAdminDto): Promise<AdminDto> {
    const { id, ...updateData } = updateAdminDto;

    return this.prisma.admin.update({
      where: { id },
      data: updateData,
    });
  }

  async findOneByUserId(userId: string): Promise<AdminDto> {
    return this.prisma.admin.findFirst({ where: { userId } });
  }
}
