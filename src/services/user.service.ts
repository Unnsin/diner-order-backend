import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  findOneByEmailAndPassword(email: String, password: String): string {
    return 'Hello World!';
  }
}
