import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateRoleDto } from '../dtos/create-role.dto';
import { RoleDto } from '../dtos/role.dto';
import { UpdateRoleDto } from '../dtos/update-role.dto';
import { PermissionDto } from 'src/modules/permission/dtos/permission.dto';

@Injectable()
export default class RoleService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<RoleDto[]> {
    return this.prisma.role.findMany();
  }

  async createSystem(createRoleDto: CreateRoleDto): Promise<RoleDto> {
    const { permissions: permissions_ids, name } = createRoleDto;

    if (await this.prisma.role.findFirst({ where: { name } })) {
      throw new ConflictException('Role name already used!');
    }

    if (permissions_ids) {
      const permissions = await this.prisma.permission.findMany({
        where: { id: { in: permissions_ids } },
      });

      if (permissions.length !== permissions.length) {
        throw new BadRequestException(
          'Permission ids not match permissions record!',
        );
      }

      return this.prisma.role.create({
        data: {
          ...createRoleDto,
          permissions: {
            connect: permissions.map((permission) => ({ id: permission.id })),
          },
        },
      });
    }

    return this.prisma.role.create({
      data: {
        ...createRoleDto,
        permissions: {
          connect: [],
        },
      },
    });
  }

  async findOneByName(name: string): Promise<RoleDto> {
    return this.prisma.role.findFirst({ where: { name } });
  }

  async findOneById(id: string): Promise<RoleDto> {
    return this.prisma.role.findFirst({ where: { id } });
  }

  async updateSystemOneById(updateRoleDto: UpdateRoleDto): Promise<RoleDto> {
    const { id, permissions: permissions_ids } = updateRoleDto;

    if (permissions_ids) {
      const permissions = await this.prisma.permission.findMany({
        where: { id: { in: permissions_ids } },
      });

      if (permissions.length !== permissions.length) {
        throw new BadRequestException(
          'Permission ids not match permissions record!',
        );
      }

      return this.prisma.role.update({
        where: { id },
        data: {
          ...updateRoleDto,
          permissions: {
            set: permissions.map((permission) => ({ id: permission.id })),
          },
        },
      });
    }

    return this.prisma.role.update({
      where: { id },
      data: {
        ...updateRoleDto,
        permissions: {
          set: [],
        },
      },
    });
  }

  async getPermissionsOfRole(roleId: string): Promise<PermissionDto[]> {
    return this.prisma.permission.findMany({
      where: {
        roles: {
          some: {
            id: roleId,
          },
        },
      },
    });
  }
}
