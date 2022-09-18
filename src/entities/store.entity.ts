import { Entity, Column,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany,ManyToOne } from "typeorm";
import { addressStore } from "./addressStore.entity";
import { Product } from "./product.entity";
import { Cart } from "./cart.entity";
import { Os } from "./Os.entity";



@Entity("store")

export class Store{

    @PrimaryGeneratedColumn("uuid")
    id:string

   @Column()
   name: string

   @Column()
   email: string

   @Column()
   cnpj: string

   @Column()
   password: string


   @Column()
   isadm: boolean

   @CreateDateColumn()
   create_at:Date

   @UpdateDateColumn()
   update_at:Date

   @OneToOne(() => addressStore, address => address.store,{eager:true, onDelete:'CASCADE'})
   @JoinColumn()
   address:addressStore

   @OneToMany(() => Product, product => product.store,{onDelete:'CASCADE'})
   product: Product[]

   @OneToMany(() => Cart , cart => cart.store,{onDelete:'CASCADE'})
   order: Cart[]


   @OneToMany(() => Os, os => os.store,{eager:true,onDelete:'CASCADE'})
   os:Os[]
}