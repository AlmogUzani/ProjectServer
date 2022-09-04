import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categories {

    @PrimaryGeneratedColumn()
    categoryID:number

    @Column('varchar',{length:30})
    categoryName:string
}

