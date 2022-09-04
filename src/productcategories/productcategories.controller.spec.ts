import { Test, TestingModule } from '@nestjs/testing';
import { ProductcategoriesController } from './productcategories.controller';
import { ProductcategoriesService } from './productcategories.service';

describe('ProductcategoriesController', () => {
  let controller: ProductcategoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductcategoriesController],
      providers: [ProductcategoriesService],
    }).compile();

    controller = module.get<ProductcategoriesController>(ProductcategoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
