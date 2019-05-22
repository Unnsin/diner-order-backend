import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import ProductType from '../types/product.type'

@Injectable()
export class ProductService {
  constructor(@InjectModel('Product') private readonly productModel: Model<ProductType>) {}

  async findAll(): Promise<ProductType[]> {
    return await this.productModel.find().exec(); 
  }

  async createNew(data): Promise<ProductType> {
    const createProduct = new this.productModel(data)
    return await createProduct.save()
  }

  delete(index): any {

  }
}
