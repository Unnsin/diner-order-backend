import { Controller, Get, Req, Post, Delete, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/products')
export class ProductsController {

    @Get()
    @UseGuards(AuthGuard())
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