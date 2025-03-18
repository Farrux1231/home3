import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwt:JwtService){}
  canActivate(
    context: ExecutionContext,
  ): boolean{
    let request:Request = context.switchToHttp().getRequest()
    let token = request.headers.authorization?.split(" ")[1];
    try {
      if (!token) {
      throw "you must login to do the aperation";
    }

    console.log(token);
    let data = this.jwt.verify(token)
    if(!data){
      throw "notogri token"
    }
    request["user"] = data.id;
    return true;
    } catch (error) {
      return error.message
    }
  }
}
