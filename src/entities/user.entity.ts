import { Entity, Column, PrimaryColumn,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { addressUser } from "./addressUser.entity";
import { Os } from "./Os.entity";
import { Cart } from "./cart.entity";
import { Product } from "./product.entity";


@Entity("user")

export class User{
    
 
  

    @PrimaryGeneratedColumn("uuid")
    id:string

    @Column({length:"100"})
    name: string

    @Column({length:"127",unique:true})
    email: string

    @Column({length:"11",unique:true,nullable:true})
    cpf: string

    @Column({length:"14",unique:true,nullable:true})
    cnpj: string

    @Column({length:"300"})
    password: string

    @Column({length:"8",nullable:true})
    birth_data: string

    @Column({default:false})
    isadm: boolean

    @Column()
    store: boolean

    @Column({default:'client'})
    group: string

    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date

    @OneToMany(() => addressUser, address => address.user, {eager:true})
    address: addressUser[]

    @OneToMany(() => Cart, cart => Cart)
    cart: Cart[]

    @OneToMany(() => Os, os => Os)
    os: Os[]
    
    @OneToMany(() => Product, product => Product)
    product: Product[]
    
}