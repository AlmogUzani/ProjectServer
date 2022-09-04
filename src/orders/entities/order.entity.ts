import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Orders {

    @PrimaryGeneratedColumn()
    orderID:number

    @Column()
    userID:number

    @Column('varchar',{length:30})
    address:string

    @Column('datetime',{nullable:true})
    orderDate:string

}