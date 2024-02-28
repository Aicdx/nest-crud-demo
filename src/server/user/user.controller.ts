import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('users')
  findAll(): string {
    return 'This action returns all user';
  }
}
