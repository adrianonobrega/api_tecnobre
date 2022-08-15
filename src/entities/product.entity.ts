import { Entity, Column,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany } from "typeorm";
import { Os } from "./Os.entity";
import { Store } from "./store.entity";
import { Order } from "./userOrder.entity";



@Entity("product")

export class Product{
    
 
  

    @PrimaryGeneratedColumn("uuid")
     id:string

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    brand: string

    @Column()
    category: string

    @Column()
    image: string

    @Column()
    price: number

    @CreateDateColumn()
    create_at:Date

    @UpdateDateColumn()
    update_at:Date

    @ManyToOne(() => Store, store => store.product,{onDelete:'CASCADE'})
    store:Store;
    
    @ManyToMany(() => Order,order => order.product)
    order:Order[]
}