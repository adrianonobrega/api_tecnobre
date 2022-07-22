export interface IUserCreate {
    name: string
    email: string
    cpf:string
    password:string
    idade: number
    isadm:boolean
    address:string
    cep:string
    number:number
    district:string
    city:string
    state:string
}

export interface IUser extends IUserCreate{
    id:string
    create_at:Date
    update_at:Date
}