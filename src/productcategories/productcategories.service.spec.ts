import { Test, TestingModule } from '@nestjs/testing';
import { ProductcategoriesService } from './productcategories.service';

describe('ProductcategoriesService', () => {
  let service: ProductcategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductcategoriesService],
    }).compile();

    service = module.get<ProductcategoriesService>(ProductcategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
