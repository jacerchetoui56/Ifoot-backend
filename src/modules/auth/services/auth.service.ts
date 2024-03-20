import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AppConfigService } from 'src/common/services/app-config.service';
import AdminService from 'src/modules/admin/services/admin.service';
import PlayerService from 'src/modules/player/services/player.service';
import RoleService from 'src/modules/role/services/role.service';
import TrainerService from 'src/modules/trainer/services/trainer.service';
import UserService from 'src/modules/user/services/user.service';
import { AuthDto } from '../dtos/auth.dto';

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

  async adminLogin(credentials: AuthDto) {
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
    const payload = { name, userId: user.id, profileId: admin.id };

    return {
      user: {
        email: user.email,
        roleId: user.roleId,
      },
      profile: {
        id: admin.id,
        ...admin,
      },
      permissions: permissions.map((p) => ({ code: p.code, name: p.name })),
      access_token: this.jwtService.sign(payload, {
        secret: this.appConfigService.authConfig.jwtSecret,
        expiresIn: this.appConfigService.authConfig.jwtExpiresIn,
      }),
    };
  }

  async trainerLogin(credentials: AuthDto) {
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
    const payload = { name, userId: user.id, profileId: trainer.id };

    return {
      user: {
        email: user.email,
        roleId: user.roleId,
      },
      profile: {
        id: trainer.id,
        ...trainer,
      },
      permissions: permissions.map((p) => ({ code: p.code, name: p.name })),
      access_token: this.jwtService.sign(payload, {
        secret: this.appConfigService.authConfig.jwtSecret,
        expiresIn: this.appConfigService.authConfig.jwtExpiresIn,
      }),
    };
  }

  async playerLogin(credentials: AuthDto) {
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
        email: user.email,
        roleId: user.roleId,
      },
      profile: {
        id: player.id,
        ...player,
      },
      permissions: permissions.map((p) => ({ code: p.code, name: p.name })),
      access_token: this.jwtService.sign(payload, {
        secret: this.appConfigService.authConfig.jwtSecret,
        expiresIn: this.appConfigService.authConfig.jwtExpiresIn,
      }),
    };
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
