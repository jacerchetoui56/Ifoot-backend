import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';
import { RoleProtectionEnum } from '../enums/role-protection.enum';

export class CreateRoleDto {
  @IsString()
  name: string;

  @IsString()
  @IsEnum(RoleProtectionEnum)
  @IsOptional()
  protection?: RoleProtectionEnum;

  @IsArray()
  @IsOptional()
  permissions?: string[];
}
