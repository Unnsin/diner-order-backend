import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import OrderType from '../types/order.type'


@Injectable()
export class OrderService {
  constructor(@InjectModel('Order') private readonly orderModel: Model<OrderType>) {}

  async findAll(): Promise<OrderType[]> {
    return await this.orderModel.find().exec() 
  }

  async createNew(data): Promise<OrderType> {
    const createOrder = new this.orderModel(data)
    return await createOrder.save()
  }

  delete(index): any {

  }
}
