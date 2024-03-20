import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminDto } from './create-admin.dto';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class UpdateAdminDto extends PartialType(CreateAdminDto) {
  @IsUUID()
  @IsNotEmpty()
  id: string;
}
