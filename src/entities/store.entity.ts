import { Entity, Column,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany,ManyToOne } from "typeorm";
import { addressStore } from "./addressStore.entity";
import { Product } from "./product.entity";
import { Order } from "./request.entity";
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

   @OneToMany(() => Product, product => product.store,{eager:true,onDelete:'CASCADE'})
   product: Product[]

   @OneToMany(() => Order , order => order.store,{onDelete:'CASCADE'})
   order: Order[]


   @OneToMany(() => Os, os => os.store,{onDelete:'CASCADE'})
   os:Os[]
}