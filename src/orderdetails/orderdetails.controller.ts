import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderdetailsDto } from './orderdetails-dto';
import { OrderdetailsService } from './orderdetails.service';

@Controller('orderdetails')
export class OrderdetailsController {
  constructor(private readonly orderdetailsService: OrderdetailsService) {}

  @Post()
  create(@Body() createOrderdetailDto: OrderdetailsDto) {
    return this.orderdetailsService.create(createOrderdetailDto);
  }

  @Get()
  findAll() {
    return this.orderdetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orderdetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderdetailDto: OrderdetailsDto) {
    return this.orderdetailsService.update(+id, updateOrderdetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orderdetailsService.remove(+id);
  }
}
