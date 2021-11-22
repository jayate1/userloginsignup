import { EntityRepository, Repository } from 'typeorm';
import { user } from './user.entity';
import { authcredentialdto } from './authcredential.dto';
import * as bcrypt from 'bcrypt'; 
@EntityRepository(user)
export class UsersRepository extends Repository<user> {
  async createuser(authcredentialdto: authcredentialdto): Promise<any> {
    const {name,phone,username, password } = authcredentialdto;
    const salt =await bcrypt.genSalt();
    console.log(salt)
    const hashedPassword=await bcrypt.hash(password,salt);
    console.log(hashedPassword,"hassedpassword")
    return await this.save({name,phone,username,password:hashedPassword});
  }
  async getuser()
  {
   const query=await this.createQueryBuilder('user')
   const user=await query.getMany();
   return user;
  }
}
