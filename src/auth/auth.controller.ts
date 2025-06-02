import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';

// auth.controller.ts
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @Post('register')
  async register(@Body() dto: RegisterAuthDto) {
    return this.usersService.create(dto);
  }

  @Post('login')
  async login(@Body() dto: LoginAuthDto) {
    const user = await this.authService.validateUser(dto);
    if (!user) throw new UnauthorizedException();
    return this.authService.login(user);
  }
}
