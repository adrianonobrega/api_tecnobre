import { Entity,OneToOne, Column,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, ManyToMany, JoinColumn,OneToMany, JoinTable } from "typeorm";
import { addressUser } from "./addressUser.entity";
// import { Os } from "./Os.entity";
import { Product } from "./product.entity";
import { Store } from "./store.entity";
import { User } from "./user.entity";
import { Os } from "./Os.entity";




@Entity("cart")

export class Cart{
    
 
    
 
  

    @PrimaryGeneratedColumn("uuid")
     id:string

    @Column()
    status: string

    @Column({ type: "decimal", precision: 9, scale: 2 })
    total_price: number

    @CreateDateColumn()
    create_at:Date

    @UpdateDateColumn()
    update_at:Date

    @ManyToOne(() => User, user => user.cart,{ eager: true })
    user:User

    @ManyToOne(() => Store, store => store.order,{eager: true,onDelete:'CASCADE'})
    store:Store

    @ManyToMany(() => Product, product => product.cart,{eager:true})
    @JoinTable()
    product:Product[]

    @ManyToOne(() => addressUser, address => address.cart,{eager: true,onDelete:'CASCADE'})
    address: addressUser

    // @ManyToMany(() => Os, os => os.cart,{eager:true})
    // @JoinTable()
    // os:Os[]

}