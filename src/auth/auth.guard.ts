import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { JWTConstants, secret } from 'constant';

@Injectable()
export class AuthGuard implements CanActivate {
  private reflector: Reflector
  private jwtService: JwtService = new JwtService()
  private configService: ConfigService

  //constructor(private jwtService: JwtService) {}

   async canActivate(
    context: ExecutionContext,
  ):  Promise<boolean>{

     const req = context.switchToHttp().getRequest()
     const token_ = this.getToken(req)
     console.log(token_)
     if(!token_){
      throw new UnauthorizedException()
     }

     try {
      console.log(secret)
      const payload = await this.jwtService.verifyAsync(token_,{
        secret: JWTConstants.secret,
      })
      if(!payload){
        console.log("Payload Error!!")
      }
      console.log(payload)
      req['user'] = payload

     } catch (error) {
       throw new UnauthorizedException()
     }

     return true
  }

  private getToken(request: Request): string | any {
    const token = request.headers['auth-token'] ||
    request.headers['authorization']  || 
   // request['query']['token'] ||
    request.headers['x-access-token']
    return token
  }

}
