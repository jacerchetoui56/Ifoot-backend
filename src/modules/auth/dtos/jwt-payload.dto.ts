export class JwtPayloadDto {
  userId: string;
  name: string;
  profileId: string;
  roleId: string;
  iat?: number;
  exp?: number;
}
