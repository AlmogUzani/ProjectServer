import { Controller, Post, Body, Get, Put, Delete, Param} from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './entities/user.entity';
import { UsersDto } from './users-dto';
import { decrypt } from '../crypt';


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
    
    @Post('cart')
    getCart(@Body() body) {       
        console.log(body)
        const dec = decrypt(body.encryptedUserIdJson)
        console.log('dec',dec);
        return this.service.getCart(Number(dec))
    }


    @Post('login')
    loginn(@Body() userLogin){
        return this.service.login(userLogin.username, userLogin.password)
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