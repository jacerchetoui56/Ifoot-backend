import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateScopeDto } from '../dtos/create-scope.dto';
import { ScopeDto } from '../dtos/scope.dto';
import { ScopeCodeEnum } from '../enums/scope-code.enum';
import { UpdateScopeDto } from '../dtos/update-scope.dto';

@Injectable()
export default class ScopeService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createScopeDto: CreateScopeDto): Promise<ScopeDto> {
    const { code } = createScopeDto;

    if (await this.prisma.permissionScope.findFirst({ where: { code } })) {
      throw new ConflictException('Scope code already used!');
    }

    const scope = await this.prisma.permissionScope.create({
      data: createScopeDto,
    });

    return scope;
  }

  async updateOneById(updateScopeDto: UpdateScopeDto): Promise<ScopeDto> {
    const { id, ...updateData } = updateScopeDto;

    return this.prisma.permissionScope.update({
      where: { id },
      data: updateData,
    });
  }

  async findOneByCode(code: ScopeCodeEnum): Promise<ScopeDto> {
    return this.prisma.permissionScope.findFirst({ where: { code } });
  }

  async findAll(): Promise<ScopeDto[]> {
    return this.prisma.permissionScope.findMany();
  }
}
