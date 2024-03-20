import { Module } from '@nestjs/common';
import { AdminModule } from 'src/modules/admin/admin.module';
import { PermissionModule } from 'src/modules/permission/permission.module';
import { RoleModule } from 'src/modules/role/role.module';
import { ScopeModule } from 'src/modules/scope/scope.module';
import { UserModule } from 'src/modules/user/user.module';
import SeederService from './services/seed.service';

@Module({
  imports: [PermissionModule, ScopeModule, RoleModule, UserModule, AdminModule],
  providers: [SeederService],
})
export class SeederModule {}
