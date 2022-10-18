import { Entity, Column, PrimaryColumn,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { Cart } from "./cart.entity";
import { User } from "./user.entity";


@Entity("user_address")

export class addressUser{

    @PrimaryGeneratedColumn("uuid")
     id:string

    @Column({length:"200"})
    address: string

    @Column({length:"8"})
    cep: string

    @Column()
    number: number

    @Column({length:"50"})
    district: string

    @Column({length:"50"})
    city: string

    @Column({length:"50"})
    state: string

    
    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date

    @OneToMany(() => Cart, cart => cart.address)
    cart: Cart[]

    @ManyToOne(() => User, user => user.address,{onDelete:'CASCADE'} )
    user:User
}