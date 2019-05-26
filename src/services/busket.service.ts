import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import BusketType from '../types/busket.type'
import ProductType from '../types/product.type'

@Injectable()
export class BusketService {
  constructor(
    @InjectModel('Busket') private readonly busketModel: Model<BusketType>,
    @InjectModel('Product') private readonly productModel:  Model<ProductType>, 
  ) {}


  async getByUserId(userId): Promise<any> {
    const busket = await this.busketModel.findOne({ userId: userId }).exec(); 
    const productsPromiseArr = busket.products.map(productId => {
      return this.productModel.findOne({ _id: productId }).exec()
    })
    const productsArr = await Promise.all(productsPromiseArr)
    return { products: productsArr, userId: busket.userId, _id: busket._id }
  }

  async createNew(data): Promise<BusketType> {
    const createBusket = new this.busketModel(data)
    return await createBusket.save()
  }

  async addProduct(userId, productId): Promise<BusketType> {
    return await this.busketModel.findOne({ userId: userId }, (err, doc) => {
      if(err) {}
      doc.products.push(productId)
      doc.save()
    })
  }

  async delete(userId, productId): Promise<any> {
    return await this.busketModel.findOne({ userId: userId }, (err, document) => {
        if(err) {}
        const index = document.products.indexOf(productId)
        document.products = document.products.splice(index, 1)
        document.save()
    })
  }

}
