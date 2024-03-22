export class AdminLoggedInDto {
  user: {
    id: string;
    email: string;
    roleId: string;
    profile: {
      id: string;
      firstName: string;
      lastName: string;
      phone?: string;
      userId: string;
    };
    permissions: string[];
  };
  access_token: string;
  refresh_token: string;
}
