import { Entity, Column,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";



@Entity("store")

export class Store{

    @PrimaryGeneratedColumn("uuid")
    id:string

   @Column()
   name: string

   @Column()
   email: string

   @Column()
   cnpj: string

   @Column()
   password: string


   @Column()
   isadm: boolean

   @CreateDateColumn()
   create_at:Date

   @UpdateDateColumn()
   update_at:Date
}