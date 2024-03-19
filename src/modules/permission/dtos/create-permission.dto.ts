import { IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { PermissionCodeEnum } from '../enums/permission-code.enum';

export class CreatePermissionDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(PermissionCodeEnum)
  code: PermissionCodeEnum;

  @IsString()
  @IsUUID()
  scopeId: string;
}
