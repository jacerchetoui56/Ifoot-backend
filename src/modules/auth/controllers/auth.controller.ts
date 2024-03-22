import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { RequiredPermissions } from '../decorators/required-permission.decorator';
import { AuthDto } from '../dtos/auth.dto';
import { RefreshTokenDto } from '../dtos/refresh-token.dto';
import AuthService from '../services/auth.service';
import { PermissionCodeEnum } from 'src/modules/permission/enums/permission-code.enum';
import { CreateAdminDto } from 'src/modules/admin/dtos/create-admin.dto';
import { CreatePlayerDto } from 'src/modules/player/dtos/create-player.dto';
import { User } from '../decorators/user.decorator';
import { UserDto } from 'src/modules/user/dtos/user.dto';
import { AuthGuard } from '../guards/auth.guard';
import { CreateTrainerDto } from 'src/modules/trainer/dtos/creaet-trainer.dto';

@Controller('auth')
export default class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('admin/login')
  adminLogin(@Body() credentials: AuthDto) {
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
  createTrainer(@Body() createTrainerDto: CreateTrainerDto) {
    return this.authService.createTrainer(createTrainerDto);
  }

  @RequiredPermissions(PermissionCodeEnum.CREATE_PLAYER)
  @Post('player/new')
  createPlayer(@Body() createPlayerDto: CreatePlayerDto) {
    return this.authService.createPlayer(createPlayerDto);
  }

  @Post('refresh')
  refresh(@Body() refreshToken: RefreshTokenDto) {
    return this.authService.refresh(refreshToken);
  }

  @Get()
  @UseGuards(AuthGuard)
  getCurrentUser(@User() user: UserDto) {
    return this.authService.getCurrent(user);
  }
}
