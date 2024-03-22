import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AppConfigService } from 'src/common/services/app-config.service';
import AdminService from 'src/modules/admin/services/admin.service';
import PlayerService from 'src/modules/player/services/player.service';
import RoleService from 'src/modules/role/services/role.service';
import TrainerService from 'src/modules/trainer/services/trainer.service';
import UserService from 'src/modules/user/services/user.service';
import { AuthDto } from '../dtos/auth.dto';
import { AdminLoggedInDto } from 'src/modules/admin/dtos/admin-loggedin.dto';
import { JwtPayloadDto } from '../dtos/jwt-payload.dto';
import { TrainerLoggedInDto } from 'src/modules/trainer/dtos/trainer-loggedin.dto';
import { RefreshTokenDto } from '../dtos/refresh-token.dto';
import { CreateAdminDto } from 'src/modules/admin/dtos/create-admin.dto';
import { CreatePlayerDto } from 'src/modules/player/dtos/create-player.dto';
import { PlayerLoggedInDto } from 'src/modules/player/dtos/player-loggedin.dto';

@Injectable()
export default class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly playerService: PlayerService,
    private readonly trainerService: TrainerService,
    private readonly adminService: AdminService,
    private readonly jwtService: JwtService,
    private readonly appConfigService: AppConfigService,
    private readonly roleService: RoleService,
  ) {}

  async adminLogin(credentials: AuthDto): Promise<AdminLoggedInDto> {
    const user = await this.userService.validateUser(credentials);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const admin = await this.adminService.findOneByUserId(user.id);
    if (!admin) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const permissions = await this.roleService.getPermissionsOfRole(
      user.roleId,
    );

    const name = `${admin.firstName} ${admin.lastName}`;
    const payload: JwtPayloadDto = {
      name,
      userId: user.id,
      profileId: admin.id,
      roleId: user.roleId,
    };

    return {
      user: {
        id: user.id,
        email: user.email,
        roleId: user.roleId,
        profile: {
          id: admin.id,
          ...admin,
        },
        permissions: permissions.map((p) => p.code),
      },
      access_token: this.jwtService.sign(payload, {
        secret: this.appConfigService.authConfig.jwtAccessSecret,
        expiresIn: this.appConfigService.authConfig.jwtAccessExpiresIn,
      }),
      refresh_token: this.jwtService.sign(payload, {
        secret: this.appConfigService.authConfig.jwtRefreshSecret,
        expiresIn: this.appConfigService.authConfig.jwtRefreshExpiresIn,
      }),
    };
  }

  async trainerLogin(credentials: AuthDto): Promise<TrainerLoggedInDto> {
    const user = await this.userService.validateUser(credentials);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const trainer = await this.trainerService.findOneByUserId(user.id);
    if (!trainer) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const permissions = await this.roleService.getPermissionsOfRole(
      user.roleId,
    );

    const name = `${trainer.firstName} ${trainer.lastName}`;
    const payload: JwtPayloadDto = {
      name,
      userId: user.id,
      profileId: trainer.id,
      roleId: user.roleId,
    };

    return {
      user: {
        id: user.id,
        email: user.email,
        roleId: user.roleId,
        profile: {
          id: trainer.id,
          ...trainer,
        },
        permissions: permissions.map((p) => p.code),
      },
      access_token: this.jwtService.sign(payload, {
        secret: this.appConfigService.authConfig.jwtAccessSecret,
        expiresIn: this.appConfigService.authConfig.jwtAccessExpiresIn,
      }),
      refresh_token: this.jwtService.sign(payload, {
        secret: this.appConfigService.authConfig.jwtRefreshSecret,
        expiresIn: this.appConfigService.authConfig.jwtRefreshExpiresIn,
      }),
    };
  }

  async playerLogin(credentials: AuthDto): Promise<PlayerLoggedInDto> {
    const user = await this.userService.validateUser(credentials);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const player = await this.playerService.findOneByUserId(user.id);
    if (!player) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const permissions = await this.roleService.getPermissionsOfRole(
      user.roleId,
    );

    const name = `${player.firstName} ${player.lastName}`;
    const payload = { name, userId: user.id, profileId: player.id };

    return {
      user: {
        id: user.id,
        email: user.email,
        roleId: user.roleId,
        profile: {
          id: player.id,
          ...player,
        },
        permissions: permissions.map((p) => p.code),
      },
      access_token: this.jwtService.sign(payload, {
        secret: this.appConfigService.authConfig.jwtAccessSecret,
        expiresIn: this.appConfigService.authConfig.jwtAccessExpiresIn,
      }),
      refresh_token: this.jwtService.sign(payload, {
        secret: this.appConfigService.authConfig.jwtRefreshSecret,
        expiresIn: this.appConfigService.authConfig.jwtRefreshExpiresIn,
      }),
    };
  }

  async adminRefreshAccessToken({ refresh_token }: RefreshTokenDto) {
    let payload: JwtPayloadDto;

    try {
      payload = this.jwtService.verify(refresh_token, {
        secret: this.appConfigService.authConfig.jwtRefreshSecret,
      });
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }

    const admin = await this.adminService.findOneById(payload.profileId);

    if (!admin) {
      throw new UnauthorizedException();
    }

    const newPayload = {
      name: `${admin.firstName} ${admin.lastName}`,
      userId: payload.userId,
      profileId: payload.profileId,
      roleId: payload.roleId,
    };

    return {
      access_token: this.jwtService.sign(newPayload, {
        secret: this.appConfigService.authConfig.jwtAccessSecret,
        expiresIn: this.appConfigService.authConfig.jwtAccessExpiresIn,
      }),
      refresh_token,
    };
  }
  async playerRefreshAccessToken({ refresh_token }: RefreshTokenDto) {
    let payload: JwtPayloadDto;

    try {
      payload = this.jwtService.verify(refresh_token, {
        secret: this.appConfigService.authConfig.jwtRefreshSecret,
      });
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }

    const player = await this.playerService.findOneById(payload.profileId);

    if (!player) {
      throw new UnauthorizedException();
    }

    const newPayload = {
      name: `${player.firstName} ${player.lastName}`,
      userId: payload.userId,
      profileId: payload.profileId,
      roleId: payload.roleId,
    };

    return {
      access_token: this.jwtService.sign(newPayload, {
        secret: this.appConfigService.authConfig.jwtAccessSecret,
        expiresIn: this.appConfigService.authConfig.jwtAccessExpiresIn,
      }),
      refresh_token,
    };
  }
  async trainerRefreshAccessToken({ refresh_token }: RefreshTokenDto) {
    let payload: JwtPayloadDto;

    try {
      payload = this.jwtService.verify(refresh_token, {
        secret: this.appConfigService.authConfig.jwtRefreshSecret,
      });
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }

    const trainer = await this.trainerService.findOneById(payload.profileId);

    if (!trainer) {
      throw new UnauthorizedException();
    }

    const newPayload = {
      name: `${trainer.firstName} ${trainer.lastName}`,
      userId: payload.userId,
      profileId: payload.profileId,
      roleId: payload.roleId,
    };

    return {
      access_token: this.jwtService.sign(newPayload, {
        secret: this.appConfigService.authConfig.jwtAccessSecret,
        expiresIn: this.appConfigService.authConfig.jwtAccessExpiresIn,
      }),
      refresh_token,
    };
  }

  async createAdmin(createAdmin: CreateAdminDto) {
    return this.adminService.createSystem(createAdmin);
  }

  async createPlayer(createPlayerDto: CreatePlayerDto) {
    return this.playerService.create(createPlayerDto);
  }

  // async createAdmin(createAdminDto: CreateAdminDto) {
  // const user = await this.userService.create(createAdminDto);
  // const admin = await this.adminService.createSystem(createAdminDto);

  // return {
  //   user,
  //   profile: admin,
  // };
  // }
}
