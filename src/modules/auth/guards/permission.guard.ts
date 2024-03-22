import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import RoleService from 'src/modules/role/services/role.service';
import { JwtPayloadDto } from '../dtos/jwt-payload.dto';

@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly roleService: RoleService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const requiredPermissions = this.reflector.get<string[]>(
      'permissions',
      context.getHandler(),
    );

    if (!requiredPermissions) {
      return true;
    }

    const user: JwtPayloadDto = request.user;

    const userPermissions = await this.roleService.getPermissionsOfRole(
      user.roleId,
    );

    const hasPermission = requiredPermissions.every((permission) =>
      userPermissions.find(
        (userPermission) => userPermission.code === permission,
      ),
    );

    return hasPermission;
  }
}
