import { IsString } from 'class-validator';
import { ScopeCodeEnum } from '../enums/scope-code.enum';

export class CreateScopeDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  code: ScopeCodeEnum;
}
