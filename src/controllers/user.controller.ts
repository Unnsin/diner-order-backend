import { Controller, Get, Req, Post, Delete } from '@nestjs/common';
import { Request } from 'express';
import { UserService } from '../services/user.service'
import UserType from '../types/user.type'

@Controller('api/users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    findAll(@Req() request: Request): Promise<UserType[]> {
        return this.userService.findAll()
    }
}