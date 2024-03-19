import { IsString } from 'class-validator';

export class CreateScopeDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  code: string;
}
