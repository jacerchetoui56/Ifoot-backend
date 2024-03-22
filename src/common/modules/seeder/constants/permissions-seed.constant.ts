import { PermissionCodeEnum } from 'src/modules/permission/enums/permission-code.enum';
import { ScopeDto } from 'src/modules/scope/dtos/scope.dto';
import { ScopeCodeEnum } from 'src/modules/scope/enums/scope-code.enum';
import { SeedPermissionDto } from '../dtos/seed-permission.dto';

export const PERMISSIONS_SEED = (scopes: ScopeDto[]): SeedPermissionDto[] => [
  // -------------------------- training sessions
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.TRAINING_SESSION_MANAGEMENT,
    )?.id,
    name: 'Get Training Sessions',
    code: PermissionCodeEnum.GET_TRAINING_SESSION,
    description: 'This permission allow user to get training sessions',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.TRAINING_SESSION_MANAGEMENT,
    )?.id,
    name: 'Create Training Session',
    code: PermissionCodeEnum.CREATE_TRAINING_SESSION,
    description:
      'This permission make the user able to create new training sessions',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.TRAINING_SESSION_MANAGEMENT,
    )?.id,
    name: 'Update Training Session',
    code: PermissionCodeEnum.UPDATE_TRAINING_SESSION,
    description:
      'This permission make the user able to update his training sessions',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.TRAINING_SESSION_MANAGEMENT,
    )?.id,
    name: 'Delete Training Session',
    code: PermissionCodeEnum.DELETE_TRAINING_SESSION,
    description:
      'This permission make the user able to delete his training sessions',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.TRAINING_SESSION_MANAGEMENT,
    )?.id,
    name: 'System Delete Training Session',
    code: PermissionCodeEnum.SYSTEM_UPDATE_TRAINING_SESSION,
    protection: 'PROTECTED',
    description:
      'This permission make the user able to update any training sessions',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.TRAINING_SESSION_MANAGEMENT,
    )?.id,
    name: 'System Delete Training Session',
    code: PermissionCodeEnum.SYSTEM_DELETE_TRAINING_SESSION,
    protection: 'PROTECTED',
    description:
      'This permission make the user able to delete any training sessions',
  },
  // -------------------------- presence
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.PRESENCE_MANAGEMENT,
    )?.id,
    name: 'Get Presence',
    code: PermissionCodeEnum.GET_PRESENCE,
    description: 'This permission allow user to get relevant presence',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.PRESENCE_MANAGEMENT,
    )?.id,
    name: 'System Get Presence',
    code: PermissionCodeEnum.SYSTEM_GET_PRESENCE,
    description:
      'This permission allow user to get any presence in training sessions',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.PRESENCE_MANAGEMENT,
    )?.id,
    name: 'Make Presence',
    code: PermissionCodeEnum.MAKE_PRESENCE,
    description:
      'This permission allow user to make presence in training sessions',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.PRESENCE_MANAGEMENT,
    )?.id,
    name: 'Update Presence',
    code: PermissionCodeEnum.UPDATE_PRESENCE,
    description:
      'This permission allow user to update presence in training sessions',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.PRESENCE_MANAGEMENT,
    )?.id,
    name: 'Delete Presence',
    code: PermissionCodeEnum.DELETE_PRESENCE,
    description: 'This permission allow user to delete presence',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.PRESENCE_MANAGEMENT,
    )?.id,
    name: 'System Update Presence',
    code: PermissionCodeEnum.SYSTEM_UPDATE_PRESENCE,
    description: 'This permission allow user to udpate any presence',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.PRESENCE_MANAGEMENT,
    )?.id,
    name: 'System Delete Presence',
    code: PermissionCodeEnum.SYSTEM_DELETE_PRESENCE,
    description: 'This permission allow user to delete any presence',
  },
  // -------------------------- roles
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.ROLES_MANAGEMENT,
    )?.id,
    name: 'Get Roles',
    code: PermissionCodeEnum.GET_ROLE,
    description: 'This permission allow user to get roles',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.ROLES_MANAGEMENT,
    )?.id,
    name: 'Create Role',
    code: PermissionCodeEnum.CREATE_ROLE,
    description: 'This permission allow user to create new roles',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.ROLES_MANAGEMENT,
    )?.id,
    name: 'System Create Role',
    code: PermissionCodeEnum.SYSTEM_CREATE_ROLE,
    description:
      'This permission allow user to create new roles with protected permissions',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.ROLES_MANAGEMENT,
    )?.id,
    name: 'Update Role',
    code: PermissionCodeEnum.UPDATE_ROLE,
    description: 'This permission allow user update non protected roles',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.ROLES_MANAGEMENT,
    )?.id,
    name: 'System Update Role',
    code: PermissionCodeEnum.SYSTEM_UPDATE_ROLE,
    description: 'This permission allow user update protected roles',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.ROLES_MANAGEMENT,
    )?.id,
    name: 'Delete Role',
    code: PermissionCodeEnum.DELETE_ROLE,
    description: 'This permission allow user delete non protected roles',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.ROLES_MANAGEMENT,
    )?.id,
    name: 'Access Admin Page',
    code: PermissionCodeEnum.ADMIN_ACCESS,
    description: 'This permission allow user to access admin page',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.ROLES_MANAGEMENT,
    )?.id,
    name: 'Access Player Page',
    code: PermissionCodeEnum.PLAYER_ACCESS,
    description: 'This permission allow user to access player page',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.ROLES_MANAGEMENT,
    )?.id,
    name: 'Access Trainer Page',
    code: PermissionCodeEnum.TRAINER_ACCESS,
    description: 'This permission allow user to access trainer page',
  },

  // -------------------------- permissions
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.ROLES_MANAGEMENT,
    )?.id,
    name: 'Get Permissions',
    code: PermissionCodeEnum.GET_PERMISSION,
    description: 'This permission allow user to get permissions list',
  },

  // -------------------------- scopes
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.ROLES_MANAGEMENT,
    )?.id,
    name: 'Get Scopes',
    code: PermissionCodeEnum.GET_SCOPE,
    description: 'This permission allow user to get scopes list',
  },

  // -------------------------- admins
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.ADMIN_MANAGEMENT,
    )?.id,
    name: 'Get Admins',
    code: PermissionCodeEnum.GET_ADMIN,
    description: 'This permission allow user to get admins list',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.ADMIN_MANAGEMENT,
    )?.id,
    name: 'Create Admin',
    code: PermissionCodeEnum.CREATE_ADMIN,
    protection: 'PROTECTED',
    description: 'This permission make the user able to create new admins',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.ADMIN_MANAGEMENT,
    )?.id,
    name: 'Create Admin',
    code: PermissionCodeEnum.SYSTEM_CREATE_ADMIN,
    protection: 'SYSTEM',
    description: 'This permission make the user able to create new admins',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.ADMIN_MANAGEMENT,
    )?.id,
    name: 'System Delete Admin',
    code: PermissionCodeEnum.SYSTEM_DELETE_ADMIN,
    protection: 'SYSTEM',
    description: 'This permission allow user to delete admins',
  },
  // -------------------------- players
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.PLAYER_MANAGEMENT,
    )?.id,
    name: 'Get Players',
    code: PermissionCodeEnum.GET_PLAYER,
    description: 'This permission allow user to get players list',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.PLAYER_MANAGEMENT,
    )?.id,
    name: 'Create Players',
    code: PermissionCodeEnum.CREATE_PLAYER,
    protection: 'PROTECTED',
    description: 'This permission allow user to create new players',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.PLAYER_MANAGEMENT,
    )?.id,
    name: 'Delete Players',
    code: PermissionCodeEnum.DELETE_PLAYER,
    protection: 'PROTECTED',
    description: 'This permission allow user to delete players',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.PLAYER_MANAGEMENT,
    )?.id,
    name: 'Update Players',
    code: PermissionCodeEnum.UPDATE_PLAYER,
    protection: 'PROTECTED',
    description: 'This permission allow user to update players',
  },

  // -------------------------- trainers
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.TRAINER_MANAGEMENT,
    )?.id,
    name: 'Get Trainers',
    code: PermissionCodeEnum.GET_TRAINER,
    description: 'This permission allow user to get trainers list',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.TRAINER_MANAGEMENT,
    )?.id,
    name: 'Create Trainers',
    code: PermissionCodeEnum.CREATE_TRAINER,
    protection: 'PROTECTED',
    description: 'This permission allow user to create new trainers',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.TRAINER_MANAGEMENT,
    )?.id,
    name: 'Delete Trainers',
    code: PermissionCodeEnum.DELETE_TRAINER,
    protection: 'PROTECTED',
    description: 'This permission allow user to delete trainers',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.TRAINER_MANAGEMENT,
    )?.id,
    name: 'Update Trainers',
    code: PermissionCodeEnum.UPDATE_TRAINER,
    protection: 'PROTECTED',
    description: 'This permission allow user to update trainers',
  },

  // -------------------------- teams
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.TEAMS_MANAGEMENT,
    )?.id,
    name: 'Get Teams',
    code: PermissionCodeEnum.GET_TEAM,
    description: 'This permission allow user to get teams list',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.TEAMS_MANAGEMENT,
    )?.id,
    name: 'Create Teams',
    code: PermissionCodeEnum.CREATE_TEAM,
    protection: 'PROTECTED',
    description: 'This permission allow user to create new teams',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.TEAMS_MANAGEMENT,
    )?.id,
    name: 'Delete Teams',
    code: PermissionCodeEnum.DELETE_TEAM,
    protection: 'PROTECTED',
    description: 'This permission allow user to delete teams',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.TEAMS_MANAGEMENT,
    )?.id,
    name: 'Update Teams',
    code: PermissionCodeEnum.UPDATE_TEAM,
    protection: 'PROTECTED',
    description: 'This permission allow user to update teams',
  },

  // -------------------------- categories
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.CATEGORY_MANAGEMENT,
    )?.id,
    name: 'Get Categories',
    code: PermissionCodeEnum.GET_CATEGORY,
    description: 'This permission allow user to get categories list',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.CATEGORY_MANAGEMENT,
    )?.id,
    name: 'Create Categories',
    code: PermissionCodeEnum.CREATE_CATEGORY,
    protection: 'PROTECTED',
    description: 'This permission allow user to create new categories',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.CATEGORY_MANAGEMENT,
    )?.id,
    name: 'Delete Categories',
    code: PermissionCodeEnum.DELETE_CATEGORY,
    protection: 'PROTECTED',
    description: 'This permission allow user to delete categories',
  },
  {
    scopeId: scopes.find(
      (scope) => scope.code === ScopeCodeEnum.CATEGORY_MANAGEMENT,
    )?.id,
    name: 'Update Categories',
    code: PermissionCodeEnum.UPDATE_CATEGORY,
    protection: 'PROTECTED',
    description: 'This permission allow user to update categories',
  },
];
