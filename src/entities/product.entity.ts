import { Entity, Column,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany } from "typeorm";
import { Os } from "./Os.entity";
import { Cart } from "./cart.entity";
import { User } from "./user.entity";



@Entity("product")

export class Product{
    
 
  

    @PrimaryGeneratedColumn("uuid")
     id:string

    @Column({length:"50"})
    name: string

    @Column({length:"300"})
    description: string

    @Column({length:"50"})
    brand: string

    @Column({length:"50"})
    category: string

    @Column({length:"300"})
    image: string

    @Column({type: "decimal", nullable: false})
    price: number

    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date

    @ManyToOne(() => User, user => user.product,{onDelete:'CASCADE'})
    user:User;
    
    @ManyToMany(() => Cart,cart => cart.product)
    cart:Cart[]
    
}