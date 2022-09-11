import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';
import { UsersDto } from './users-dto';
import * as bcrypt from 'bcrypt'
import { encrypt } from '../crypt';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private usersRepo: Repository<Users>) {}

    async getUsers(): Promise<Users[]> {
        return await this.usersRepo.find();
    }

    async getUser(id: number): Promise<Users[]> {
        return await this.usersRepo.find({
            where: [{ "userID": id }]
        });
    }

    async getUserByUsername(username: string): Promise<Users> {
        return await this.usersRepo.findOne({
            where: [{ "username": username }]
        });
    }

    async getCart(id: number): Promise<Users[]> {
        return await this.usersRepo.query(`SELECT project.products.productID, project.products.name, project.orderdetails.quantity, project.orderdetails.unitPrice, project.products.image1
        FROM project.orders
        LEFT JOIN project.orderdetails ON project.orderdetails.orderID = project.orders.orderID
        LEFT JOIN project.products ON project.orderdetails.productID = project.products.productID
        WHERE project.orders.userID = ${id};`)
    }

    async updateCart(userID, productID, amount,ifPos): Promise<Users[]> {
        if(amount==0){
            await this.usersRepo.query(`DELETE FROM project.orderdetails where (orderID = (select orderID from orders where userID = ?)) and (productID = ?);`,[userID, productID])
        }else{
            await this.usersRepo.query(`UPDATE project.orderdetails SET quantity = ? WHERE (orderID = (select orderID from orders where userID = ?)) and (productID = ?);`,[amount, userID, productID, productID]);
        }
        if(ifPos){
            return await this.usersRepo.query(`UPDATE project.products SET unitInStock = unitInStock-1 WHERE productID = ?;`,[productID])
        }
        return await this.usersRepo.query(`UPDATE project.products SET unitInStock = unitInStock+1 WHERE productID = ?;`,[productID])
    }

    async addTOCart(userID, product, amount): Promise<Users[]> {
        if(this.usersRepo.query(`select * from project.orders where project.orders.userID = ?;`,[userID])){
            const condition = await this.usersRepo.query(`select * from project.orderdetails where (orderID = (select orderID from orders where userID = ?)) and project.orderdetails.productID = ?;`,[userID, product.productID])
            console.log(condition);
            
            if(condition.length !== 0) {
                console.log('a');
                
                await this.usersRepo.query(`UPDATE project.orderdetails SET quantity = quantity + ? WHERE (orderID = (select orderID from orders where userID = ?)) and (productID = ?);`,[amount, userID, product.productID])
                return await this.usersRepo.query(`UPDATE project.products SET unitInStock = unitInStock-${amount} WHERE productID = ?;`,[product.productID])
            }else{
                console.log('s');        
                await this.usersRepo.query(`insert into project.orderdetails(orderID,productID,quantity,unitPrice,discount) values((select orderID from project.orders where userID = ${userID}), ${product.productID}, quantity+${amount}, ${product.price}, ${product.discount});`)
                console.log('ss');
                
                return await this.usersRepo.query(`UPDATE project.products SET unitInStock = unitInStock-${amount} WHERE productID = ?;`,[product.productID])
            }
        }
        await this.usersRepo.query(`insert into project.orders(userID) values(${userID});
        insert into project.orderdetails(orderID,productID,quantity,unitPrice,discount) values((select orderID from project.orders where userID = ${userID}), ${product.productID}, ${amount}, ${product.price}, ${product.discount});`)
        console.log('sa');
        
        return await this.usersRepo.query(`UPDATE project.products SET unitInStock = unitInStock-${amount} WHERE productID = ?;`,[ product.productID])
    }

    async add(newCustomer: UsersDto): Promise<Users> {
        console.log(newCustomer);
        const customer = this.usersRepo.create([{ ...newCustomer }]);
        if (customer.length) {
          return this.usersRepo.save(customer[0]);
        }
    }


    async login(username, password) {
        const user = await this.getUserByUsername(username)
        if(user && (await bcrypt.compare(password, user.password))){
            const encrypted = await encrypt(String(user.userID))
            return {encrypted}
        }
        return {err:"Username or Password are incorrect!"}
    }

    async updateUser(user: Users) {
        this.usersRepo.save(user)
    }

    async deleteUser(user: Users) {
        this.usersRepo.delete(user);
    }
}