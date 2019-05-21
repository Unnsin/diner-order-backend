import { Controller, Get, Req, Post, Delete } from '@nestjs/common';
import { Request } from 'express';

@Controller('api/auth')
export class AuthController {

    @Post()
    login(@Req() request: Request):any {
        return 'login user'
    }

    @Post()
    register(@Req() request: Request): any {
        return 'register user'
    }
}