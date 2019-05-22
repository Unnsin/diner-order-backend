import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import * as bcrypt from 'bcrypt'
import UserType from '../types/user.type'


@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<UserType>) {}

  async findAll(): Promise<UserType[]> {
    return await this.userModel.find().exec()
  }

  async register(data): Promise<UserType> {
    const password = await bcrypt.hash(data.password, 10)
    const createUser = new this.userModel({ ...data, password })
    return await createUser.save()
  }
  
  findOneByEmail(email: String, password: String): UserType {
    return this.userModel.find({ email, password });
  }
}
