import { Controller, Get, Req, Post, Delete, Param } from '@nestjs/common';
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

    @Get('delivery/:id')
    delivery(@Param('id') id: string): any {
        return this.orderService.delivery(id)
    }

    @Get(':id')
    getOrderById(@Param('id') id: String): any {
        return this.orderService.getById(id)
    }

    @Get('/delete/:id')
    deleteOrderById(@Param('id') id: String):any {
        return this.orderService.delete(id)
    }
}