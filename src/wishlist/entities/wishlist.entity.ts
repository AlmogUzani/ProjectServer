import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Wishlist {

    @PrimaryColumn()
    productID:number
    
    @PrimaryColumn()
    userID:number

}