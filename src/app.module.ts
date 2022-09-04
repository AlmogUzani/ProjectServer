import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { WishlistModule } from './wishlist/wishlist.module';
import { ProductsModule } from './products/products.module';
import { ProductcategoriesModule } from './productcategories/productcategories.module';
import { OrdersModule } from './orders/orders.module';
import { OrderdetailsModule } from './orderdetails/orderdetails.module';
import { CategoriesModule } from './categories/categories.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users/entities/user.entity';
import { Categories } from './categories/entities/category.entity';
import { Orderdetails } from './orderdetails/entities/orderdetail.entity';
import { Orders } from './orders/entities/order.entity';
import { Productcategories } from './productcategories/entities/productcategory.entity';
import { Products } from './products/entities/product.entity';
import { Wishlist } from './wishlist/entities/wishlist.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "123456",
    "database": "project",
    "entities": [Users,Categories,Orderdetails,Orders,Productcategories,Products,Wishlist],
    "synchronize": true
  }), UsersModule, CategoriesModule, OrderdetailsModule, OrdersModule, ProductcategoriesModule, ProductsModule, WishlistModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
