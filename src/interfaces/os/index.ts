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