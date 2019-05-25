import { Injectable, HttpException, HttpStatus  } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import OrderType from '../types/order.type'
import ProductType from '../types/product.type'
import OrderDto from '../dto/create-order-dto'

@Injectable()
export class OrderService {
  constructor(
    @InjectModel('Order') private readonly orderModel: Model<OrderType>,
    @InjectModel('Product') private readonly productModel: Model<ProductType>,
  ) {}

  async findAll(): Promise<OrderType[]> {
    return await this.orderModel.find().exec() 
  }

  async createNew(data: OrderDto): Promise<OrderType> {
    const productsIdArray = data.products
    const productArr = productsIdArray.map(item => {
      return this.productModel.findOne({ _id: item })
    }) 
    const products = await Promise.all(productArr)
    const createOrder = new this.orderModel({ ...data, products, status: 'pending' })
    return await createOrder.save()
  }

  async delete(id): Promise<any> {
    return await this.orderModel.findByIdAndRemove({ _id:id }) 
  }

  async delivery(id): Promise<any> {
    return await this.orderModel.findById(id, (err, order) => {
      if (err) {
        throw new HttpException({
          status: HttpStatus.FORBIDDEN,
          error: 'Order by this id not found',
        }, 404);
      }
      order.status = 'delivery'
      order.save()
    })
  }

  async getById(id): Promise<OrderType> {
    return this.orderModel.findById(id).exec()
  }
}
