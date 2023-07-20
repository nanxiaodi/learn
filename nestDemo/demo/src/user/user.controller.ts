import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { LoginDTO } from './user.dto';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/login')
  login(@Query('user') user: string, @Query('password') password: string) {
    console.log(user, password, '111');
    return this.userService.login(user, password);
  }
  @Post('/loginpost')
  async loginpost(@Body() LoginDTO: LoginDTO) {
    console.log(LoginDTO, '111');
    return this.userService.login(LoginDTO.user, LoginDTO.password);
  }
}
