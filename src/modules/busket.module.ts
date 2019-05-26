import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BusketSchema } from '../schemas/busket.schema'
import { BusketController } from '../controllers/busket.controller'
import { BusketService } from '../services/busket.service'
import { AuthModule } from '../modules/auth.module'
import { ProductSchema } from '../schemas/product.schema'


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Busket', schema: BusketSchema },
      { name: 'Product', schema: ProductSchema },
    ]),
    AuthModule
  ],
  controllers: [BusketController],
  providers: [BusketService],
})
export class BusketModule {}