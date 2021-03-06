import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm';
@Entity()
export class user
{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    
    @Column()
    name:string;
    
    @Column()
    phone:string;

    @Column({unique:true})
    username :string;

    @Column()
    password:string;
}