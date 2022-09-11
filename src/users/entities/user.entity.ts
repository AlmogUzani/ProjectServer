import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    userID:number

    @Column('varchar',{length:30})
    name:string

    @Column('tinyint')
    age:number

    @Column('varchar',{length:30})
    username:string

    @Column('varchar',{length:30})
    email:string

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    registerDate:Date

    @Column('char',{length:250})
    password:string

    @Column('varchar',{length:45})
    phoneNumber:string

    @Column('varchar',{length:45})
    address:string
}

