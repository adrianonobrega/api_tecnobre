import { Store } from "../../entities/store.entity"

export interface OsRequest {
    
    id:string
    name_equipament: string
    description: string
    status:string
    image:string 
}

export interface Os extends OsRequest {
    id: string
    created_at: Date
}

export interface OsUpdate extends OsRequest{
    total_price:string
}