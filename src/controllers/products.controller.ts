import { 
    Controller, 
    Get, 
    Req, 
    Post,
    Delete, 
    Body, 
    Param, 
    UseInterceptors, 
    UploadedFile 
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express'
import { Request } from 'express';
import { ProductService } from '../services/product.service'
import ProductType from '../types/product.type'
import { diskStorage } from  'multer';
import { extname } from  'path';


@Controller('api/products')
export class ProductsController {
    constructor(private readonly productService: ProductService) {}
    
    @Get()
    findAll(@Req() request: Request): any {
        return this.productService.findAll()
    }

    @Post()
    createNew(@Body() body: Request): Promise<ProductType> {
        return this.productService.createNew(body)
    }

    @Post('delete')
    delete(@Req() request: Request): any {
        return this.productService.delete(request.body.id)
    }

    @Get(':id')
    getById(@Param('id') id: String) {
        return this.productService.getProductById(id)
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('image'))
    uploadFile(@UploadedFile() file) {
        console.log(file);
    }
}