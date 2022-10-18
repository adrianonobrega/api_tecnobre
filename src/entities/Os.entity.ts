import { Entity, Column,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne,ManyToMany } from "typeorm";
import { User } from "./user.entity";
import { Cart } from "./cart.entity";

@Entity("os")
export class Os{
    
    @PrimaryGeneratedColumn("uuid")
     id:string

    @Column({length:"100"})
    name_equipament:string

    @Column({length:"300"})
    description:string

    @Column({length:"65"})
    status: string

    @Column({nullable:true})
    solution:string

    @Column({nullable:true})
    imagem:string

    @Column({nullable:true})
    total_price: string

    @CreateDateColumn()
    created_at:Date

    @UpdateDateColumn()
    updated_at:Date
    
    @ManyToOne(() => User, user => user.os,{eager: true,onDelete:'CASCADE'})
    user:User
    
}