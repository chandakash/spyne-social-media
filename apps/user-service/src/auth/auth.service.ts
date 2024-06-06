import { User } from '@/database/src';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && await user.validatePassword(pass)) {
      const { password, ...result } = user;
      console.log({password})
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signup(userDto: User): Promise<any> {
    const user = new User();
    user.name = userDto.name;
    user.email = userDto.email;
    user.mobile_no = userDto.mobile_no;
    await user.setPassword(userDto.password);
    const newUser = await this.userService.create(user);
    const payload = { email: newUser.email, sub: newUser.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
