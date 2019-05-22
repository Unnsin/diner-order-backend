import { Controller, Get, Req, Post, Delete } from '@nestjs/common';
import { Request } from 'express';
import { OrderService } from '../services/order.service'
import OrderType from '../types/order.type'

@Controller('api/order')
export class OrderController {
    constructor(private readonly orderService: OrderService){}

    @Get()
    findAll(@Req() request: Request): Promise<OrderType[]> {
        return this.orderService.findAll()
    }

    @Post()
    createNew(@Req() request: Request):Promise<OrderType> {
        return this.orderService.createNew(request.body);
    }

    @Delete()
    delete(@Req() request: Request): any {
        return this.orderService.delete(request.body.index)
    }
}