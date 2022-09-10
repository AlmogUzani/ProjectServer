import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orders } from './entities/order.entity';
import { OrdersDto } from './orders-dto';

@Injectable()
export class OrdersService {
  constructor(@InjectRepository(Orders) private OrdersRepo: Repository<Orders>){}
  create(createOrderDto: OrdersDto) {
    return 'This action adds a new order';
  }

  async findAll(): Promise<Orders[]> {
    return await this.OrdersRepo.find()
  }

  async findOne(id: number): Promise<Orders[]> {
    return await this.OrdersRepo.find({
      where: [{'orderID':id}]
    })
  }

  update(id: number, updateOrderDto: OrdersDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
