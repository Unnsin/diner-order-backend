import { Controller, Get, Req, Post, Delete } from '@nestjs/common';
import { Request } from 'express';

@Controller('api/products')
export class ProductsController {

    @Get()
    findAll(@Req() request: Request): string {
        return 'This action returns all products';
    }

    @Post()
    createNew(@Req() request: Request):any {
        return 'Create new product'
    }

    @Delete()
    delete(@Req() request: Request): any {
        return 'delete product'
    }
}