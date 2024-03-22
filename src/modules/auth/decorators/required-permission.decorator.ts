import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { PermissionCodeEnum } from 'src/modules/permission/enums/permission-code.enum';
import { AuthGuard } from '../guards/auth.guard';
import { PermissionGuard } from '../guards/permission.guard';

export function RequiredPermissions(...permissions: PermissionCodeEnum[]) {
  return applyDecorators(
    SetMetadata('permissions', permissions),
    UseGuards(AuthGuard, PermissionGuard),
  );
}
