import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express'
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './modules/product.module'
import { AuthModule } from './modules/auth.module'
import { OrderModule } from './modules/order.module'
import { UserModule } from './modules/user.module'
import { BusketModule } from './modules/busket.module'

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://luckyPiupiu:piupiu99@ds159546.mlab.com:59546/diner-order'
    ),
    ProductModule,
    MulterModule.register({
      dest: './public'
    }),
    AuthModule,
    OrderModule,
    UserModule,
    BusketModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [AppService],
})
export class AppModule {}
