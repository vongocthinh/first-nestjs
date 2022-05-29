import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard, LocalAuthGuard } from 'login/auth/all-auth.guard';
import { AuthService } from 'login/auth/auth.service';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
