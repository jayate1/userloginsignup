import { IsString,MaxLength,MinLength  } from "class-validator";
export class authcredentialdto
{ 

   name:string;

   phone:string;

   username:string;

   @IsString()
   @MinLength(4)
   @MaxLength(20)
   password:string;
    
}


