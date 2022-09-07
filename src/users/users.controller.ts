import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './entities/user.entity';
import { UsersDto } from './users-dto';

@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }
    
    @Get()
    getAll() {
      return this.service.getUsers()
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getUser(params.id);
    }

    @Post()
    create(@Body() newCustomer: UsersDto) {
        return this.service.add(newCustomer);
    }

    @Put()
    update(@Body() user: Users) {
        return this.service.updateUser(user);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }
}