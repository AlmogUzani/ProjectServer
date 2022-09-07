import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';
import { UsersDto } from './users-dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private usersRepo: Repository<Users>) {}

    async getUsers(): Promise<Users[]> {
        return await this.usersRepo.find();
    }

    async getUser(_id: number): Promise<Users[]> {
        return await this.usersRepo.find({
            select: ["name"],
            where: [{ "userID": _id }]
        });
    }

    async add(newCustomer: UsersDto): Promise<Users> {
        console.log(newCustomer);
        const customer = this.usersRepo.create([{ ...newCustomer }]);
        if (customer.length) {
          return this.usersRepo.save(customer[0]);
        }
    }


    async updateUser(user: Users) {
        this.usersRepo.save(user)
    }

    async deleteUser(user: Users) {
        this.usersRepo.delete(user);
    }
}