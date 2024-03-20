import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PermissionDto } from '../dtos/permission.dto';
import { CreatePermissionDto } from '../dtos/create-permission.dto';
import { PrismaService } from 'prisma/prisma.service';
import { UpdatePermissionDto } from '../dtos/udpate-permission.dto';

@Injectable()
export default class PermissionService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createPermissionDto: CreatePermissionDto,
  ): Promise<PermissionDto> {
    const { scopeId, code } = createPermissionDto;

    if (await this.prisma.permission.findFirst({ where: { code } })) {
      throw new ConflictException('Permission code already used!');
    }

    const scope = await this.prisma.permissionScope.findFirst({
      where: { id: scopeId },
    });
    if (!scope) {
      throw new NotFoundException('Scope not found!');
    }

    const permission = await this.prisma.permission.create({
      data: {
        ...createPermissionDto,
        scopeId,
      },
    });

    return permission;
  }

  async findOneByCode(code: string): Promise<PermissionDto> {
    return this.prisma.permission.findFirst({ where: { code } });
  }

  async updateOnebyId(
    updatePermissionDto: UpdatePermissionDto,
  ): Promise<PermissionDto> {
    const { id, ...updateData } = updatePermissionDto;

    return this.prisma.permission.update({
      where: { id },
      data: updateData,
    });
  }

  async findAll(): Promise<PermissionDto[]> {
    return this.prisma.permission.findMany();
  }
}
