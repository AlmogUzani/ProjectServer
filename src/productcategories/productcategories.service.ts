import { Injectable } from '@nestjs/common';
import { CreateProductcategoryDto } from './dto/create-productcategory.dto';
import { UpdateProductcategoryDto } from './dto/update-productcategory.dto';

@Injectable()
export class ProductcategoriesService {
  create(createProductcategoryDto: CreateProductcategoryDto) {
    return 'This action adds a new productcategory';
  }

  findAll() {
    return `This action returns all productcategories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productcategory`;
  }

  update(id: number, updateProductcategoryDto: UpdateProductcategoryDto) {
    return `This action updates a #${id} productcategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} productcategory`;
  }
}
