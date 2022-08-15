export interface ProductRequest {
   
    name: string
    description: string
    brand:string
    category: string
    image:string
    price:number
    store_id:string
   
    
}

export interface Product extends ProductRequest {
    id: string
    created_at: Date
    
}

export interface ProductUpdate{
    id: string
    name: string
    description: string
    brand:string
    category: string
    image:string
    price:number
    
    
}