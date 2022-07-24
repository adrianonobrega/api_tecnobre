import { Entity, Column,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";



@Entity("product")

export class Product{
    
 
  

    @PrimaryGeneratedColumn("uuid")
     id:string

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    brand: string

    @Column()
    category: string

    @Column()
    image: number

    @Column()
    price: boolean

    @CreateDateColumn()
    create_at:Date

    @UpdateDateColumn()
    update_at:Date

    
}