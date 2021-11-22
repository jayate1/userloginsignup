import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { authcredentialdto } from './authcredential.dto';
import { UsersRepository } from './user.repository';
import * as bcrypt from 'bcrypt';
import { jwtpayload } from './jwt-payload.interface';
@Injectable()
export class AuthService {
  jwtService: any;
  constructor(
    @InjectRepository(UsersRepository) private usersRepository: UsersRepository,
  ) {}
  async signUp(aaauthcredentialdto: authcredentialdto): Promise<any> {
   return this.usersRepository.createuser(aaauthcredentialdto)
  }

  async signIn(aaauthcredentialdto: authcredentialdto):Promise<any>
  {
    const{username,password}=aaauthcredentialdto;
    const user=await this.usersRepository.findOne({username});
    if(user&& (await bcrypt.compare(password,user.password)))
    {
      // const payload:jwtpayload={username};
      // console.log("jayate jaiswal")
      // const accesstoken:string=await this.jwtService.sign(payload);
      // return {accesstoken};
     }
    else
    {
      throw new UnauthorizedException('Please check your login credentials');
    }
  }
  async alluser()
  {
  return await this.usersRepository.getuser();
  }
}
