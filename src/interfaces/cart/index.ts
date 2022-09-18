import { Product } from "../../entities/product.entity"
import { Os } from "../../entities/Os.entity";

export interface CartStore {
   id: string;
    status:string
    total_price: number;
    products: Product[];
    os:Os[]
    
}

export interface CartUser {
   
    status: string
    total_price:number
    user_id:string
    products: Product[]
    os:[]
    // store_id:string
   
   
    
   
    
}

export interface Cart extends CartStore {
    id: string
    created_at: Date
}

export interface CartUpdate {
    
    id: string
    status: string
    
   
    
   
   
    
   
    
}