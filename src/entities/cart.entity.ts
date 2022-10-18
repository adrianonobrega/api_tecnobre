import { Entity,OneToOne, Column,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany, JoinColumn,OneToMany, JoinTable } from "typeorm";
import { addressUser } from "./addressUser.entity";
import { Product } from "./product.entity";
import { User } from "./user.entity";
import { Os } from "./Os.entity";

@Entity("cart")
export class Cart{

    @PrimaryGeneratedColumn("uuid")
     id:string

    @Column({length:"65"})
    status: string

    @Column({ type: "decimal", precision: 9, scale: 2 })
    total_price: number

    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date

    @ManyToOne(() => User, user => user.cart,{ eager: true })
    user:User

    @ManyToMany(() => Product, product => product.cart,{eager:true})
    @JoinTable()
    product:Product[]

    @ManyToOne(() => addressUser, address => address.cart,{eager: true,onDelete:'CASCADE'})
    address: addressUser

}