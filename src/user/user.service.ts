import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './dto/login.user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel:Model<User>,
    private jwtService: JwtService){}
    
  async findUser(phone:string){
    let user = await this.userModel.findOne({phone})
    return user
  }

  async register(data: CreateUserDto) {
    let user = await this.findUser(data.phone)
    if(user){
      return "You already registered"
    }
    let has = bcrypt.hashSync(data.password, 7)
    let newUser = {...data, password:has}
    await this.userModel.create(newUser)
    return newUser;
  }

  async login(data:LoginUserDto) {
    let user = await this.findUser(data.phone)
    if(!user){
      return 'please register first'
    }
    let compare = bcrypt.compareSync(data.password, user.password)
    if(!compare){
      return "phone or password wrong"
    }
    let token = this.jwtService.sign({id:user._id})
    return token;
  }
}
