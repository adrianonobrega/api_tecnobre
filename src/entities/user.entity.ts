import { Entity, Column, PrimaryColumn,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";


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
}