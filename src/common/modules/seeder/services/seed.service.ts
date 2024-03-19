import { OnModuleInit } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AppConfigService } from 'src/common/services/app-config.service';
import { SCOPES_SEED } from '../constants/scopes-seed.constant';

export default class SeederService implements OnModuleInit {
  constructor(
    private readonly prisma: PrismaService,
    private readonly appConfigService: AppConfigService,
  ) {}

  async onModuleInit() {
    // await this.seedAdmin();
    console.log('seeding database...');
    if (this.appConfigService.seedConfig.enable) {
      await this.seedScopes();
      await this.seedPermissions();
      await this.seedRoles();
      await this.seedAdmins();
    }
  }

  async seedAdmins() {}
  async seedRoles() {}
  async seedPermissions() {}
  async seedScopes() {
    await Promise.all(
      SCOPES_SEED.map(async (scope) => {
        // const oldScope = await this.scopeService.findOne({ code: scope.code });
        // if (oldScope)
        //   await this.scopeService.updateOneById({
        //     ...scope,
        //     _id: oldScope._id,
        //   });
        // else await this.scopeService.create(scope);
      }),
    );
  }
}
