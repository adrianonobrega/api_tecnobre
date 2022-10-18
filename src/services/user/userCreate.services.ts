import { IUserCreate, IUser } from "../../interfaces/user";
import { AppDataSource } from "../../database";
import { User } from "../../entities/user.entity";
import { v4 as uuid } from "uuid"
import * as bcrypt from "bcryptjs";
import { addressUser } from "../../entities/addressUser.entity";

export const userCreateService = async ({name, email,cpf,cnpj,password,birth_data,isAdm,address,cep,number,district,city,state}: IUserCreate) => {

    const userRepository = AppDataSource.getRepository(User) 
    const addressRepository = AppDataSource.getRepository(addressUser)

    const users = await userRepository.find()

    const alreadyExistsEmail = users.find((user) => user.email === email)
 
    const alreadyExistsCpf = users.find((user) => user.cpf === cpf)

    const alreadyExistsCnpj = users.find(user => user.cnpj === cnpj)

    const store = typeof(cnpj) === 'string' ? true : false

    console.log(store)
   
    if(alreadyExistsEmail){
      throw new Error("Email already exists")
    }

    if(alreadyExistsCpf){
      throw new Error ("Cpf already exists")
    }

    if(alreadyExistsCnpj){
      throw new Error ("Cnpj already exists")
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User()
    user.id = user.id
    user.name = name
    user.email = email
    user.cpf = cpf
    user.password = hashedPassword
    user.birth_data = birth_data
    user.isadm = isAdm
    user.store = store
    user.cnpj = cnpj
    await userRepository.save(user)

    const addressAll = new addressUser()
    addressAll.cep = cep
    addressAll.address = address
    addressAll.number = number
    addressAll.district = district
    addressAll.state = state
    addressAll.city = city
    addressAll.user = user
    
    await addressRepository.save(addressAll)

    const result = {
      id: user.id,
      name: user.name,
      email: user.email,
      isAdm: user.isadm,
      store: user.store,
      address: addressAll.address,
      number: addressAll.number,
      cep: addressAll.cep,
      district: addressAll.district,
      city: addressAll.city,
      state: addressAll.state,
    }

    return result
}