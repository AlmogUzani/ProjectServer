import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products {

    @PrimaryGeneratedColumn()
    productID:number

    @Column()
    categoryID:number

    @Column('double')
    price:number

    @Column('varchar',{length:30})
    name:string

    @Column('varchar', {length:145})
    description:string

    @Column('smallint')
    unitInStock:number

}