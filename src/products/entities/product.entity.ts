import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Products {

    @PrimaryGeneratedColumn()
    productID:number

    @Column()
    categoryID:number

    @Column('double')
    price:number
    
    @Column('varchar', {length:10})
    size:string
    
    @Column('varchar', {length:10})
    shape:string
    
    @Column('varchar', {length:10})
    color:string

    @Column('tinyint')
    discount:number

    @Column('varchar',{length:30})
    name:string

    @Column('varchar', {length:145})
    description:string

    @Column('smallint')
    unitInStock:number

    @Column('varchar', {length:500, nullable:true})
    image1:string
    
    @Column('varchar', {length:500, nullable:true})
    image2:string

    @Column('varchar', {length:500, nullable:true})
    image3:string

}