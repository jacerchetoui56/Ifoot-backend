import { RoleProtectionEnum } from '../enums/role-protection.enum';

export class RoleDto {
  id: string;
  name: string;
  protection: RoleProtectionEnum;
  permissions?: string[];
  role?: RoleDto;
  createdAt: Date;
  updatedAt: Date;
}
