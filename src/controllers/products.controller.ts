import { Controller, Get, Req, Post, Delete, Body, Param } from '@nestjs/common';
import { Request } from 'express';
import { ProductService } from '../services/product.service'
import ProductType from '../types/product.type'
@Controller('api/products')
export class ProductsController {
    constructor(private readonly productService: ProductService) {}
    
    @Get()
    findAll(@Req() request: Request): Promise<ProductType[]> {
        return this.productService.findAll()
    }

    @Post()
    createNew(@Body() body: Request): Promise<ProductType> {
        return this.productService.createNew(body)
    }

    @Delete()
    delete(@Req() request: Request): any {
        return this.productService.delete(request.body.id)
    }

    @Get(':id')
    getById(@Param('id') id: String) {
        return this.productService.getProductById(id)
    }
}