import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from './entities/product.entity';
import { ProductsDto } from './products-dto';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Products) private productRepo: Repository<Products>) {}

  create(createProductDto: ProductsDto) {
    return 'This action adds a new product';
  }

  async findAll(): Promise<Products[]> {
    return await this.productRepo.find()
  }

  async findOne(id: number): Promise<Products[]> {
    return await this.productRepo.find({
      where: [{'productID':id}]
    })
  }

  async findBestSellers(): Promise<Products[]> {
    return await this.productRepo.query(`SELECT productID 
    FROM project.orderdetails 
    GROUP BY productID
    ORDER BY COUNT(productID) DESC 
    LIMIT 3;`)
  }

  update(id: number, updateProductDto: ProductsDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
