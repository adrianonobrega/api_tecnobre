import { Entity, Column,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { Store } from "./store.entity";
import { User } from "./user.entity";



@Entity("os")

export class Os{
    
 
  

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
    @ManyToOne(() => Store, store => store.os)
    store:Store

    @ManyToOne(() => User,user => user.os)
    user:User

    
}