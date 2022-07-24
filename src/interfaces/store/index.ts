export interface IStoreCreate {
    name: string
    email: string
    cnpj:string
    password:string
    isadm:boolean
    address:string
    cep:string
    number:number
    district:string
    city:string
    state:string
    
}

export interface IStore extends IStoreCreate{
    id:string
    create_at:Date
    update_at:Date
}

export interface AddresStoreCreate{
    address:string
    cep:string
    number:number
    district:string
    city:string
    state:string
    user_id:string
}
export interface AddresStore extends AddresStoreCreate{
    id:string
    create_at:Date
    update_at:Date
}