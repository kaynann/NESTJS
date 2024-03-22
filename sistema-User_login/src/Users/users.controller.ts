import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-users.dto";
import { UpdateUserDTO } from "./dto/update-users.dto";;
import { UsersService } from "./users.service";
import { resourceUsage } from "process";

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() data: CreateUserDTO) {
    return this.usersService.create(data);
  }

  @Get()
  async read() {
    return this.usersService.list();
  }

  @Get(':id')
  async readOne(@Param('id', ParseIntPipe) id: number) {
   return this.usersService.show(id)
  } 

  // @Get(':name')
  // async readOneName(@Param('name',) name: string) {
  //  return this.usersService.showName(id, name);
  // } 

   @Put(':id')
   async update(@Body() data: UpdateUserDTO, @Param('id', ParseIntPipe) id: number) {
    return this.usersService.update(id, data);
   }
  // @Patch()
  // @Delete()
}