import { Body, Controller, Delete, Get, Patch, Post } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-users.dto";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {

  }

  @Post()
  async create(@Body() data: CreateUserDTO) {
    return this.usersService.create(data);
  }

  // @Get()
  // async read() {
  //   return { users: [] }
  // }

  // @Put()
  // @Patch()
  // @Delete()
}