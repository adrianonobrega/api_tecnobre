import { Entity, Column, PrimaryColumn,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, ManyToOne } from "typeorm";
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

    @ManyToOne(() => User, user => user.address,{
        onDelete:"CASCADE"
    })
    user:User
}