import { PermissionDto } from 'src/modules/permission/dtos/permission.dto';
import { PermissionCodeEnum } from 'src/modules/permission/enums/permission-code.enum';
import { SeedRoleDto } from '../dtos/seed-role.dto';

export const ROLES_SEED = (permissions: PermissionDto[]): SeedRoleDto[] => [
  {
    name: 'Super Admin',
    permissions: permissions.map((permission) => permission.id),
    protection: 'SYSTEM',
  },
  {
    name: 'Admin',
    permissions: permissions
      .filter((p) => p.protection !== 'SYSTEM')
      .map((permission) => permission.id),
    protection: 'SYSTEM',
  },
  {
    name: 'Player',
    permissions: permissions
      .filter(
        (p) =>
          [
            PermissionCodeEnum.GET_TEAM,
            PermissionCodeEnum.GET_CATEGORY,
            PermissionCodeEnum.GET_PRESENCE,
          ].find((code) => code === p.code) !== undefined,
      )
      .map((permission) => permission.id),
    protection: 'SYSTEM',
  },
  {
    name: 'Trainer',
    permissions: permissions
      .filter(
        (p) =>
          [
            PermissionCodeEnum.GET_TRAINING_SESSION,
            PermissionCodeEnum.CREATE_TRAINING_SESSION,
            PermissionCodeEnum.UPDATE_TRAINING_SESSION,
            PermissionCodeEnum.DELETE_TRAINING_SESSION,
            PermissionCodeEnum.GET_PRESENCE,
            PermissionCodeEnum.MAKE_PRESENCE,
            PermissionCodeEnum.UPDATE_PRESENCE,
            PermissionCodeEnum.DELETE_PRESENCE,
            PermissionCodeEnum.GET_PLAYER,
            PermissionCodeEnum.GET_TRAINER,
            PermissionCodeEnum.GET_TEAM,
            PermissionCodeEnum.GET_CATEGORY,
          ].find((code) => code === p.code) !== undefined,
      )
      .map((permission) => permission.id),
    protection: 'SYSTEM',
  },
];
