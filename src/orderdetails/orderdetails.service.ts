import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Orderdetails } from './entities/orderdetail.entity';
import { OrderdetailsDto } from './orderdetails-dto';

@Injectable()
export class OrderdetailsService {
  constructor(@InjectRepository(Orderdetails) private orderdetailsRepo: Repository<Orderdetails>){}
  create(createOrderdetailDto: OrderdetailsDto) {
    return 'This action adds a new orderdetail';
  }

  findAll() {
    return `This action returns all orderdetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderdetail`;
  }

  update(id: number, updateOrderdetailDto: OrderdetailsDto) {
    return `This action updates a #${id} orderdetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderdetail`;
  }
}
