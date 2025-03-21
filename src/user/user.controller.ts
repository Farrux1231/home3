import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login.user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("/register")
  register(@Body() createUserDto: CreateUserDto) {
    return this.userService.register(createUserDto);
  }

  @Post("/login")
  login(@Body() createUserDto: LoginUserDto) {
    return this.userService.login(createUserDto);
  }
}
