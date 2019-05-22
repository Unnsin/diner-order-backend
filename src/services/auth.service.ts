import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service'
import { jwtPayload } from '../interfaces/jwt-payload.interface'
import { UnauthorizedException } from '@nestjs/common'
import * as bcrypt from 'bcrypt' 
import UserType from '../types/user.type'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(email, password): Promise<string> {
    const newPassword = await bcrypt.hash(password, 10)
    const user: jwtPayload = { email, password: newPassword };
    const userObject = this.usersService.findOneByEmail(email, newPassword);
    if (!!userObject) {
      return this.jwtService.sign(user);
    } else {
      throw new UnauthorizedException();
    }
  }

  async register(data): Promise<string> {
    const user = await this.usersService.register(data)
    return this.jwtService.sign({ email: user.email, password: user.password })
  }

  async validateUser(payload: jwtPayload): Promise<UserType> {
    return await this.usersService.findOneByEmail(payload.email, payload.password);
  }
}
