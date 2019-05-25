import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from '../controllers/products.controller'
import { ProductSchema } from '../schemas/product.schema'
import { ProductService } from '../services/product.service'
import { AuthModule } from '../modules/auth.module'


@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Product', schema: ProductSchema}]),
    AuthModule
  ],
  controllers: [ProductsController],
  providers: [ProductService],
})
export class ProductModule {}