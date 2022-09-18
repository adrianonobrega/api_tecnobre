import { Entity, Column,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne,ManyToMany } from "typeorm";
import { Store } from "./store.entity";
import { User } from "./user.entity";
import { Cart } from "./cart.entity";



@Entity("os")

export class Os{
    
 
  

    @PrimaryGeneratedColumn("uuid")
     id:string

    @Column()
    name_equipament:string

    @Column()
    description:string

    @Column()
    status: string

    @Column({nullable:true})
    solution:string

    @Column({nullable:true})
    imagem:string

    @Column({nullable:true})
    total_price: string

    @CreateDateColumn()
    create_at:Date

    @UpdateDateColumn()
    update_at:Date
    
    @ManyToOne(() => Store, store => store.os)
    store:Store

    @ManyToMany(() => Cart,cart => cart.os)
    cart:Cart[]

    
}