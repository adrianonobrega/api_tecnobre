import { Entity,OneToOne, Column,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany, JoinColumn } from "typeorm";
import { Os } from "./Os.entity";
import { Product } from "./product.entity";
import { Store } from "./store.entity";
import { User } from "./user.entity";



@Entity("order")

export class Order{
    
 
  

    @PrimaryGeneratedColumn("uuid")
     id:string

    @Column()
    status: string

    @Column()
    total_price: string

    @CreateDateColumn()
    create_at:Date

    @UpdateDateColumn()
    update_at:Date

    @ManyToOne(() => User, user => user.order)
    user:User

    @ManyToOne(() => Store, store => store.order,{onDelete:'CASCADE'})
    store:Store

    @ManyToMany(() => Product, product => product.order)
    product:Product[]

    @OneToOne(() => Os, os => os.store,{eager:true, onDelete:'CASCADE'})
   @JoinColumn()
   os:Os
    
}