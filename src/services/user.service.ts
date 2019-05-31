import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import * as bcrypt from 'bcrypt'
import UserType from '../types/user.type'

const saltRounds = 10

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<UserType>) {}

  async findAll(): Promise<UserType[]> {
    return await this.userModel.find().exec()
  }

  async register(data): Promise<UserType> {
    var salt = bcrypt.genSaltSync(saltRounds);
    var password = bcrypt.hashSync(data.password, salt);
    const createUser = new this.userModel({ ...data, password })
    return await createUser.save()
  }
  
  findOneByEmail(email: String): UserType {
    return this.userModel.findOne({ email }).exec();
  }

  async getUserDetail(id: String): Promise<any> {
    return await this.userModel.findOne({ _id: id }).exec();
  }

}
