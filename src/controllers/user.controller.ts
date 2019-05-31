import { Controller, Get, Req, Post, Delete, UseGuards, Headers, Body, Param } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from '../services/user.service'
import UserType from '../types/user.type'

@Controller('api/users')
export class UserController {
    constructor(
        private readonly userService: UserService,
    ) {}

    @Get(':id')
    getUSerById(@Param('id') id: string) {
        return this.userService.getUserDetail(id)
    }


    @Get()
    @UseGuards(AuthGuard())
    findAll(@Req() request: Request): Promise<UserType[]> {
        return this.userService.findAll()
    }
}