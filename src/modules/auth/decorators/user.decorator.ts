import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtPayloadDto } from '../dtos/jwt-payload.dto';

export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext): JwtPayloadDto => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user as JwtPayloadDto;
    return data ? user?.[data] : user;
  },
);
