import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private readonly jwtService: JwtService) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
  
    //const token = this.extractToken(context);
    const token = this.extractTokenFromCookie(context);

    if (!token) {
      throw new UnauthorizedException();
    }

    try {
      const payload = this.jwtService.verify(token);
      console.log(payload);

      context.switchToHttp().getRequest().user = payload;
      return true;
    } catch (e) {
      throw new UnauthorizedException();
    }

  }

  extractToken(context: ExecutionContext): string | null {
    console.log(context.switchToHttp().getRequest().headers['authorization']);
    const token = context.switchToHttp().getRequest().headers['authorization']?.split(' ')[1];
    return token || null;
  }

  extractTokenFromCookie(context: ExecutionContext): string | null {
    console.log('Extracting token from cookies');
    const token = context.switchToHttp().getRequest().cookies['token'];
    return token || null;
  }

}
