import { Controller, Get, Req, Post, Delete } from '@nestjs/common';
import { Request } from 'express';

@Controller('api/users')
export class UserController {

    @Get()
    findAll(@Req() request: Request): string {
        return 'This action returns all users';
    }

    @Post()
    createNew(@Req() request: Request):any {
        return 'Create new user'
    }

    @Delete()
    delete(@Req() request: Request): any {
        return 'delete product'
    }
}