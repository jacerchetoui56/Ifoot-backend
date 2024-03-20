import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AppConfigService } from 'src/common/services/app-config.service';
import AdminService from 'src/modules/admin/services/admin.service';
import PermissionService from 'src/modules/permission/services/permission.service';
import RoleService from 'src/modules/role/services/role.service';
import ScopeService from 'src/modules/scope/services/scope.service';
import { ADMINS_SEED } from '../constants/admins-seed.constant';
import { PERMISSIONS_SEED } from '../constants/permissions-seed.constant';
import { ROLES_SEED } from '../constants/roles-seed.constant';
import { SCOPES_SEED } from '../constants/scopes-seed.constant';

@Injectable()
export default class SeederService implements OnModuleInit {
  constructor(
    private readonly prisma: PrismaService,
    private readonly appConfigService: AppConfigService,
    private readonly scopeService: ScopeService,
    private readonly permissionService: PermissionService,
    private readonly roleService: RoleService,
    private readonly adminService: AdminService,
  ) {}

  async onModuleInit() {
    if (this.appConfigService.seedConfig.enable) {
      console.log('seeding database...');
      console.log('seeding Scopes...');
      await this.seedScopes();
      console.log('seeding Permissions...');
      await this.seedPermissions();
      console.log('seeding Roles...');
      await this.seedRoles();
      console.log('seeding Admins...');
      await this.seedAdmins();
    }
  }

  async seedAdmins() {
    const roles = await this.roleService.findAll();
    const ownerData = {
      email: this.appConfigService.seedConfig.ownerEmail,
      firstName: this.appConfigService.seedConfig.ownerFirstName,
      lastName: this.appConfigService.seedConfig.ownerLastName,
    };
    await Promise.all(
      ADMINS_SEED(roles, ownerData).map(async (admin) => {
        const oldAdmin = await this.prisma.admin.findFirst({
          where: { user: { email: admin.email } },
        });
        if (oldAdmin)
          await this.adminService.updateSystemOneById({
            ...admin,
            id: oldAdmin.id,
          });
        else await this.adminService.createSystem(admin);
      }),
    );
  }

  async seedRoles() {
    const permissions = await this.permissionService.findAll();
    await Promise.all(
      ROLES_SEED(permissions).map(async (role) => {
        const oldRole = await this.roleService.findOneByName(role.name);
        if (oldRole)
          await this.roleService.updateSystemOneById({
            ...role,
            id: oldRole.id,
          });
        else await this.roleService.createSystem(role);
      }),
    );
  }

  async seedPermissions() {
    const scopes = await this.scopeService.findAll();
    await Promise.all(
      PERMISSIONS_SEED(scopes).map(async (permission) => {
        const oldPermission = await this.permissionService.findOneByCode(
          permission.code,
        );
        if (oldPermission)
          await this.permissionService.updateOnebyId({
            ...permission,
            id: oldPermission.id,
          });
        else await this.permissionService.create(permission);
      }),
    );
  }

  async seedScopes() {
    await Promise.all(
      SCOPES_SEED.map(async (scope) => {
        const oldScope = await this.scopeService.findOneByCode(scope.code);
        if (oldScope)
          await this.scopeService.updateOneById({
            ...scope,
            id: oldScope.id,
          });
        else await this.scopeService.create(scope);
      }),
    );
  }
}
