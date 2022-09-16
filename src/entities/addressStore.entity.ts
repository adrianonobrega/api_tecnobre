import { Entity, Column, PrimaryColumn,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, ManyToOne, OneToOne,JoinColumn } from "typeorm";
import { Store } from "./store.entity";



@Entity("stores_address")

export class addressStore{

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
    store: any;

  
}