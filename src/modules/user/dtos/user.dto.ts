import { Exclude } from 'class-transformer';
import { RoleDto } from 'src/modules/role/dtos/role.dto';

export class UserDto {
  id: string;
  email: string;

  @Exclude()
  password: string;

  role?: RoleDto;
  roleId?: string;
  createdAt: Date;
  updatedAt: Date;
}
