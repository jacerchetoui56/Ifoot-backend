import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { PermissionCodeEnum } from '../enums/permission-code.enum';
import { PermissionProtectionEnum } from '../enums/permission-protection.enum';

export class CreatePermissionDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(PermissionCodeEnum)
  code: PermissionCodeEnum;

  @IsOptional()
  protection?: PermissionProtectionEnum;

  @IsString()
  @IsUUID()
  scopeId: string;
}
