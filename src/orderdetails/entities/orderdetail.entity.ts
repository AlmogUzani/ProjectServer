import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Orderdetails {

    @PrimaryColumn()
    orderID:number

    @PrimaryColumn()
    productID:number

    @Column('smallint')
    quantity:number

    @Column('double')
    unitPrice:number

    @Column('tinyint')
    discount:number
}