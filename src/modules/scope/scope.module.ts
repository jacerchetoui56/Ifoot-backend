import { Module } from '@nestjs/common';
import ScopeService from './services/scope.service';

@Module({
  providers: [ScopeService],
  exports: [],
  controllers: [],
  imports: [],
})
export class ScopeModule {}
