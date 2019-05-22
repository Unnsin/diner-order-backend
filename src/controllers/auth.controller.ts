import { Controller, Get, Req, Post, Body, } from '@nestjs/common';
import UserType from '../types/user.type'
import { AuthService } from '../services/auth.service'

@Controller('api/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    login(@Body() body: UserType):any {
        return this.authService.signIn(body.email, body.password)
    }

    @Post('register')
    register(@Body() body: UserType): any {
        return this.authService.register(body)
    }
}