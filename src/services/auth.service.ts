import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './user.service'
import { jwtPayload } from '../interfaces/jwt-payload.interface'


@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(): Promise<string> {
    const user: jwtPayload = { email: 'user@email.com', password: 'password' };
    return this.jwtService.sign(user);
  }

  async validateUser(payload: jwtPayload): Promise<any> {
    return await this.usersService.findOneByEmailAndPassword(payload.email, payload.password);
  }
}
