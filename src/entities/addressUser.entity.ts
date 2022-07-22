import { Entity, Column, PrimaryColumn,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";


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
}