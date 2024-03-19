import { ScopeCodeEnum } from 'src/modules/scope/enums/scope-code.enum';
import { SeedScopeDto } from '../dtos/seed-scope.dto';

export const SCOPES_SEED: SeedScopeDto[] = [
  {
    code: ScopeCodeEnum.ADMIN_MANAGEMENT,
    name: 'Admin Management',
    description: 'Admin Management',
  },
  {
    code: ScopeCodeEnum.CATEGORY_MANAGEMENT,
    name: 'Category Management',
    description: 'Category Management',
  },
  {
    code: ScopeCodeEnum.PLAYER_MANAGEMENT,
    name: 'Player Management',
    description: 'Player Management',
  },
  {
    code: ScopeCodeEnum.PRESENCE_MANAGEMENT,
    name: 'Presence Management',
    description: 'Presence Management',
  },
  {
    code: ScopeCodeEnum.ROLES_MANAGEMENT,
    name: 'Roles Management',
    description: 'Roles Management',
  },
  {
    code: ScopeCodeEnum.TEAMS_MANAGEMENT,
    name: 'Teams Management',
    description: 'Teams Management',
  },
  {
    code: ScopeCodeEnum.TRAINER_MANAGEMENT,
    name: 'Trainer Management',
    description: 'Trainer Management',
  },
  {
    code: ScopeCodeEnum.TRAINING_SESSION_MANAGEMENT,
    name: 'Training Session Management',
    description: 'Training Session Management',
  },
];
