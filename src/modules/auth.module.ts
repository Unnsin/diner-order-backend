import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from '../controllers/auth.controller'
import { UserSchema } from '../schemas/user.schema'
import { AuthService } from '../services/auth.service'

@Module({
  imports: [MongooseModule.forFeature([{name: 'User', schema: UserSchema}])],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}