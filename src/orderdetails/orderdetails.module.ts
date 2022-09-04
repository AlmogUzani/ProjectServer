import { Module } from '@nestjs/common';
import { OrderdetailsService } from './orderdetails.service';
import { OrderdetailsController } from './orderdetails.controller';
import { Orderdetails } from './entities/orderdetail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Orderdetails])],
  controllers: [OrderdetailsController],
  providers: [OrderdetailsService]
})
export class OrderdetailsModule {}
