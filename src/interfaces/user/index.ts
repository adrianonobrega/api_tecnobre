export interface IUserCreate {
    name: string
    email: string
    cpf:string
    password:string
    birth_data: string
    isAdm:boolean
    address:string
    cep:string
    number:number
    district:string
    city:string
    state:string
    cnpj:string
    
}

export interface IUser extends IUserCreate{
    id:string
    create_at:Date
    update_at:Date
}

export interface AddresUser{
    address:string
    cep:string
    number:number
    district:string
    city:string
    state:string
    user_id:string
}
export interface IAddress extends AddresUser{
    id:string
    create_at:Date
    update_at:Date
}

export interface UpdateUser{
    id:string
    name: string
    email: string
    password:string
    birth_data: string
    
}