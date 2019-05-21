import { Controller, Get, Req, Post, Delete } from '@nestjs/common';
import { Request } from 'express';

@Controller('api/order')
export class OrderController {

    @Get()
    findAll(@Req() request: Request): string {
        return 'This action returns all order';
    }

    @Post()
    createNew(@Req() request: Request):any {
        return 'Create new order'
    }

    @Delete()
    delete(@Req() request: Request): any {
        return 'delete order'
    }
}