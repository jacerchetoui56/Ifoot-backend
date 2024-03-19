import { ScopeDto } from 'src/modules/scope/dtos/scope.dto';
import { SeedPermissionDto } from '../dtos/seed-permission.dto';
import { ScopeCodeEnum } from 'src/modules/scope/enums/scope-code.enum';
import { PermissionCodeEnum } from 'src/modules/permission/enums/permission-code.enum';

export const PERMISSIONS_SEED = (scopes: ScopeDto[]): SeedPermissionDto[] => [
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.ADMIN_MANAGEMENT,
    )?.id,
    name: 'Create Admin',
    code: PermissionCodeEnum.CREATE_ADMIN,
    description: 'This permission make the user able to create new admins',
  },
  //   TODO: add the rest of permissions
];
