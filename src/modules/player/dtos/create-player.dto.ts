import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreatePlayerDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  password: string = 'password';

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  @IsOptional()
  @IsPhoneNumber()
  phone?: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  @IsOptional()
  city?: string;

  @IsDate()
  @IsOptional()
  birthdate?: Date;

  @IsString()
  @IsUUID()
  teamId: string;

  @IsString()
  @IsUUID()
  categoryId: string;

  @IsString()
  @IsUUID()
  @IsOptional()
  groupCategory?: string;

  constructor(partial: Partial<CreatePlayerDto>) {
    Object.assign(this, partial);
  }
}
