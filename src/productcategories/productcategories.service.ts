import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Productcategories } from './entities/productcategory.entity';
import { ProductcategoriesDto } from './productcategory-dto';

@Injectable()
export class ProductcategoriesService {
  constructor(@InjectRepository(Productcategories) private productcategoriesRepo: Repository<Productcategories>){}
  create(createProductcategoryDto: ProductcategoriesDto) {
    return 'This action adds a new productcategory';
  }

  findAll() {
    return `This action returns all productcategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productcategory`;
  }

  update(id: number, updateProductcategoryDto: ProductcategoriesDto) {
    return `This action updates a #${id} productcategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} productcategory`;
  }
}
