import { Module } from '@nestjs/common';
import { ProductcategoriesService } from './productcategories.service';
import { ProductcategoriesController } from './productcategories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Productcategories } from './entities/productcategory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Productcategories])],
  controllers: [ProductcategoriesController],
  providers: [ProductcategoriesService]
})
export class ProductcategoriesModule {}
