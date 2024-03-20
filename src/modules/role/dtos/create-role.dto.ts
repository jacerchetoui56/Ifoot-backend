import { IsArray, IsOptional, IsString, MinLength } from 'class-validator';
import { RoleProtectionEnum } from '../enums/role-protection.enum';

export class CreateRoleDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  protection?: RoleProtectionEnum;

  @IsArray()
  @MinLength(1)
  @IsOptional()
  permissions?: string[];
}
