import { Product } from "../../entities/product.entity"

export interface RequestStore {
   
    status: string
    store_id: string
    total_price:number
    // address_id:string
    
    products: Product[]
   
    
}

export interface requestStore2 extends RequestStore{
    create_at: Date
    update_at: Date
}

export interface RequestUser {
   
    status: string
    total_price:number
    // address_id:string
    user_id:string
    products: Product[]
   
    
   
    
}
export interface requestUser2 extends RequestUser{
    create_at: Date
    update_at: Date
}

export interface RequestUpdate {
    
    id: string
    status: string
    
   
    
   
   
    
   
    
}