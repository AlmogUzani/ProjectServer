import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsDto } from './products-dto';
import { ProductsService } from './products.service';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: ProductsDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: Number) {
    return this.productsService.findOne(Number(id));
  }

  @Get('bestSellers')
  findBestSellers() {
    return this.productsService.findBestSellers();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: ProductsDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
