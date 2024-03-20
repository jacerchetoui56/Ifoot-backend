import { Body, Controller, Post } from '@nestjs/common';
import { AuthDto } from '../dtos/auth.dto';
import AuthService from '../services/auth.service';

@Controller('auth')
export default class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('admin/login')
  adminLogin(@Body() credentials: AuthDto) {
    console.log('logging with credentials: ', credentials);
    return this.authService.adminLogin(credentials);
  }

  @Post('player/login')
  playerLogin(@Body() credentials: AuthDto) {
    return this.authService.playerLogin(credentials);
  }

  @Post('trainer/login')
  trainerLogin(@Body() credentials: AuthDto) {
    return this.authService.trainerLogin(credentials);
  }

  // @Post('admin/new')
  // createAdmin(@Body() createAdminDto: CreateAdminDto) {
  // return this.authService.createAdmin(createAdminDto);
  // }
  @Post('trainer/new')
  createTrainer() {}
  @Post('player/new')
  createPlayer() {}
}
