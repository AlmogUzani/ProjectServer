import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Productcategories {

    @PrimaryColumn()
    productID:number

    @PrimaryColumn()
    categoryID:number


}