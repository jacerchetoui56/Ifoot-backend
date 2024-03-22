export class PlayerLoggedInDto {
  user: {
    userId: string;
    email: string;
    roleId: string;
    profileId: string;
    permissions: string[];
  };
  profile: {
    profileId: string;
    firstName: string;
    lastName: string;
    phone?: string;
    userId: string;
  };
  access_token: string;
  refresh_token: string;
}
