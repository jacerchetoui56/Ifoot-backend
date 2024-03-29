import { ScopeCodeEnum } from 'src/modules/scope/enums/scope-code.enum';
import { PermissionCodeEnum } from '../enums/permission-code.enum';
import { PermissionProtectionEnum } from '../enums/permission-protection.enum';

export class PermissionDto {
  id: string;
  name: string;
  description: string;
  code: PermissionCodeEnum | string;
  protection?: PermissionProtectionEnum;
  createdAt: Date;
  updatedAt: Date;
  scopeId: string;
  scope?: ScopeCodeEnum | string;
}
