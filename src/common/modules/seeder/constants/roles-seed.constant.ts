import { PermissionDto } from 'src/modules/permission/dtos/permission.dto';
import { PermissionProtectionEnum } from 'src/modules/permission/enums/permission-protection.enum';
import { SeedRoleDto } from '../dtos/seed-role.dto';

export const ROLES_SEED = (permissions: PermissionDto[]): SeedRoleDto[] => [
  {
    name: 'Owner',
    permissions: permissions.map((permission) => permission.id),
  },
  {
    name: 'Super Admin',
    permissions: permissions
      .filter((p) => p.protection !== PermissionProtectionEnum.SYSTEM)
      .map((permission) => permission.id),
  },
];
