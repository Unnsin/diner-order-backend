import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderController } from '../controllers/order.controller'
import { OrderSchema } from '../schemas/order.schema'
import { ProductSchema } from '../schemas/product.schema'
import { OrderService } from '../services/order.service'

@Module({
  imports: [MongooseModule.forFeature([
    { name: 'Order', schema: OrderSchema},
    { name: 'Product', schema: ProductSchema },
  ])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}