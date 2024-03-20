import { ScopeCodeEnum } from '../enums/scope-code.enum';

export class ScopeDto {
  id: string;
  name: string;
  description: string;
  code: ScopeCodeEnum | string;
  createdAt: Date;
  updatedAt: Date;
}
