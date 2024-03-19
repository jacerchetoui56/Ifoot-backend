import { RoleDto } from 'src/modules/role/dtos/role.dto';
import { SeedAdminDto } from '../dtos/seed-admin.dto';

export const ADMINS_SEED = (
  roles: RoleDto[],
  ownerData: { email: string; name: string; phone: string },
): SeedAdminDto[] => [];
