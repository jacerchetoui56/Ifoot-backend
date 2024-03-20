import { UserDto } from 'src/modules/user/dtos/user.dto';

export class PlayerDto {
  id?: string;
  firstName: string;
  lastName: string;
  phone?: string;
  address?: string;
  city?: string;
  birthdate?: Date;
  user?: UserDto;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}
