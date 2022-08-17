import { Entity, Column, PrimaryColumn,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { addressUser } from "./addressUser.entity";
import { Os } from "./Os.entity";
import { Order } from "./userOrder.entity";


@Entity("user")

export class User{
    
 
  

    @PrimaryGeneratedColumn("uuid")
     id:string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    cpf: string

    @Column()
    password: string

    @Column()
    idade: number

    @Column()
    isadm: boolean

    @CreateDateColumn()
    create_at:Date

    @UpdateDateColumn()
    update_at:Date

    @OneToMany(() => addressUser, address => address.user, {eager:true})
    address: addressUser[]

    @OneToMany(() => Order, order => order.user)
    order: Order[]

    @OneToMany(() => Os , os => os.user)
    os:Os[]
  newUser: Order;
    
}