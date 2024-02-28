import { CreateUserDTO, EditUserDTO } from './user.dto';
import { User } from './user.interface';
import { UserService } from './user.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

interface UserResponse<T = unknown> {
  code: number;
  data?: T;
  message: string;
}
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // GET /user/users
  @Get('users')
  async findAll(): Promise<UserResponse<User[]>> {
    return {
      code: 200,
      data: await this.userService.findAll(),
      message: 'success',
    };
  }

  // GET /user/:id
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserResponse<User>> {
    return {
      code: 200,
      data: await this.userService.findOne(id),
      message: 'success',
    };
  }

  // POST /user
  @Post()
  async addOne(@Body() body: CreateUserDTO): Promise<UserResponse> {
    await this.userService.addOne(body);
    return {
      code: 200,
      message: 'success',
    };
  }

  // PUT /user/:id
  @Put(':id')
  async editOne(
    @Param('id') id: string,
    @Body() body: EditUserDTO,
  ): Promise<UserResponse> {
    await this.userService.editOne(id, body);
    return {
      code: 200,
      message: 'success',
    };
  }

  // DELETE /user/:id
  @Delete(':id')
  async deleteOne(@Param('id') id: string): Promise<UserResponse> {
    await this.userService.deleteOne(id);
    return {
      code: 200,
      message: 'success',
    };
  }
}
