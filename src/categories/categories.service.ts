import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriesDto } from './categories-dto';
import { Categories } from './entities/category.entity';


@Injectable()
export class CategoriesService {
  constructor(@InjectRepository(Categories) private categoriesRepo: Repository<Categories>){}

  create(createCategoryDto: CategoriesDto) {
    return 'This action adds a new category';
  }

  findAll() {
    return `This action returns all categories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: CategoriesDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
