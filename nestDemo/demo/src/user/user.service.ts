import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor() {}
  login(user: string, password: string) {
    if (user === 'songyinan' && password === '123456') {
      return '登录成功';
    } else {
      return '账号密码错误';
    }
  }
}
