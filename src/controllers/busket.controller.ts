import { Controller, Get,  Post, Body, Param } from '@nestjs/common';
import { Request } from 'express';
import { BusketService } from '../services/busket.service'
import BusketType from '../types/busket.type'

@Controller('api/busket')
export class BusketController {
    constructor(private readonly busketService: BusketService) {}

    @Get(':id')
    getProductById(@Param('id') id: String): Promise<BusketType>{
        return this.busketService.getByUserId(id)
    }

    @Post()
    createNew(@Body() body: Request): Promise<BusketType> {
        return this.busketService.createNew(body)
    }

    @Post('add')
    addproduct(@Body() body: any): Promise<BusketType> {
        return this.busketService.addProduct(body.userId, body.productId)
    }

    @Post('delete')
    delete(@Body() body: any): Promise<BusketType> {
        return this.busketService.delete(body.userId, body.productId)
    }

}