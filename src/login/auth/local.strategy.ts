import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }
  async validate(userName: string, passWord: string): Promise<any> {
    const user = this.authService.validateUser(userName, passWord);

    if (user) return user;

    throw new UnauthorizedException();
  }
}
