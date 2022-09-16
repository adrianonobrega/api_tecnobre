import { Entity, Column, PrimaryColumn,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { Order } from "./request.entity";
import { User } from "./user.entity";


@Entity("user_address")

export class addressUser{

    @PrimaryGeneratedColumn("uuid")
     id:string

    @Column()
    address: string

    @Column()
    cep: string

    @Column()
    number: number

    @Column()
    district: string

    @Column()
    city: string

    @Column()
    state: string

    
    @CreateDateColumn()
    create_at:Date

    @UpdateDateColumn()
    update_at:Date

    @OneToMany(() => Order, order => order.address)
    orders: Order[]

    @ManyToOne(() => User, user => user.address,{onDelete:'CASCADE'} )
    user:User
}