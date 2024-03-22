import { Controller, Get, Post } from '@nestjs/common';
import AuthService from '../services/auth.service';

@Controller('auth')
export default class RoleController {
  constructor(private readonly authService: AuthService) {}

  @Post('roles')
  createRole() {
    return 'Role Created';
  }

  @Get('roles')
  getRoles() {
    return 'getting Roles';
  }

  @Get('permissions')
  getPermissions() {
    return 'getting Permissions';
  }
}
