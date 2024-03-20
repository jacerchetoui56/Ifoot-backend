import { UserDto } from 'src/modules/user/dtos/user.dto';

export class TrainerDto {
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
