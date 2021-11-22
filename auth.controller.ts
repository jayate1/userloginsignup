import { Body, Controller, Get, Post } from '@nestjs/common';
import { authcredentialdto } from './authcredential.dto';
import { AuthService } from './auth.service';
import { get } from 'http';

@Controller('auth')
export class AuthController {
  constructor(private authservice: AuthService) {}
  @Post('/signup')
  signup(@Body() authcredentialdto: authcredentialdto): Promise<any> {
    return this.authservice.signUp(authcredentialdto);
  }
  @Post('/signin')
  signIn(@Body() authcredentialdto: authcredentialdto):Promise<{accesstoken:string}>
  {
  return this.authservice.signIn(authcredentialdto);
  }
  @Get()
  alluser()
  {
  return this.authservice.alluser();
  }
}
