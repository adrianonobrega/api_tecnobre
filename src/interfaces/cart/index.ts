import { Product } from "../../entities/product.entity"

export interface CartStore {
   id: string;
    status:string
    total_price: number;
    products: Product[];
}

export interface CartUser {
   
    status: string
    total_price:number
    user_id:string
    products: Product[]
    // store_id:string
   
   
    
   
    
}

export interface CartUpdate {
    
    id: string
    status: string
    
   
    
   
   
    
   
    
}