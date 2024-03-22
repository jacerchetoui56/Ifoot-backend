import { Body, Controller, Post } from '@nestjs/common';
import { RequiredPermissions } from '../decorators/required-permission.decorator';
import { AuthDto } from '../dtos/auth.dto';
import { RefreshTokenDto } from '../dtos/refresh-token.dto';
import AuthService from '../services/auth.service';
import { PermissionCodeEnum } from 'src/modules/permission/enums/permission-code.enum';
import { CreateAdminDto } from 'src/modules/admin/dtos/create-admin.dto';
import { CreatePlayerDto } from 'src/modules/player/dtos/create-player.dto';

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

  @Post('admin/new')
  @RequiredPermissions(PermissionCodeEnum.SYSTEM_CREATE_ADMIN)
  createAdmin(@Body() createAdminDto: CreateAdminDto) {
    return this.authService.createAdmin(createAdminDto);
  }

  @Post('trainer/new')
  @RequiredPermissions(PermissionCodeEnum.CREATE_TRAINER)
  createTrainer() {}

  @RequiredPermissions(PermissionCodeEnum.CREATE_PLAYER)
  @Post('player/new')
  createPlayer(@Body() createPlayerDto: CreatePlayerDto) {
    return this.authService.createPlayer(createPlayerDto);
  }

  @Post('admin/refresh')
  adminRefreshAccessToken(@Body() refreshToken: RefreshTokenDto) {
    return this.authService.adminRefreshAccessToken(refreshToken);
  }

  @Post('player/refresh')
  playerRefreshAccessToken(@Body() refreshToken: RefreshTokenDto) {
    return this.authService.playerRefreshAccessToken(refreshToken);
  }

  @Post('trainer/refresh')
  trainerRefreshAccessToken(@Body() refreshToken: RefreshTokenDto) {
    return this.authService.trainerRefreshAccessToken(refreshToken);
  }
}
