import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, groupBy } from 'rxjs';
import { Repository } from 'typeorm';
import { Orderdetails } from './entities/orderdetail.entity';
import { OrderdetailsDto } from './orderdetails-dto';

@Injectable()
export class OrderdetailsService {
  constructor(@InjectRepository(Orderdetails) private orderdetailsRepo: Repository<Orderdetails>){}
  create(createOrderdetailDto: OrderdetailsDto) {
    return 'This action adds a new orderdetail';
  }

  async findAll(): Promise<Orderdetails[]> {
    return await this.orderdetailsRepo.find()
  }

  async findOne(id: number): Promise<Orderdetails[]> {
    return await this.orderdetailsRepo.find({
      where: [{'orderID':id}]
    })
  }

  async findBestSellers(): Promise<Orderdetails[]> {
    return await this.orderdetailsRepo.query(`select name, image1, bestSeller.productID, quantityy from project.products join
    (SELECT productID, sum(quantity) as quantityy
    FROM project.orderdetails 
    GROUP BY productID
    ORDER BY quantityy DESC 
    LIMIT 3) as bestSeller on products.productID = bestSeller.productID;`)
  }

  update(id: number, updateOrderdetailDto: OrderdetailsDto) {
    return `This action updates a #${id} orderdetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderdetail`;
  }
}
