import { RoleDto } from 'src/modules/role/dtos/role.dto';
import { SeedAdminDto } from '../dtos/seed-admin.dto';

export const ADMINS_SEED = (
  roles: RoleDto[],
  superAdminData: {
    email: string;
    firstName: string;
    lastName: string;
  },
): SeedAdminDto[] => [
  {
    email: superAdminData.email,
    password: 'password',
    firstName: superAdminData.firstName,
    lastName: superAdminData.lastName,
    roleId: roles.find((role) => role.name === 'Super Admin').id,
  },
  {
    email: 'admin@gmail.com',
    password: 'password',
    firstName: 'Admin',
    lastName: 'Chetoui',
    roleId: roles.find((role) => role.name === 'Admin').id,
  },
];
