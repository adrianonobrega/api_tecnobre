import { IUserCreate, IUser } from "../../interfaces/user";
import { AppDataSource } from "../../database";
import { User } from "../../entities/user.entity";
import { v4 as uuid } from "uuid"
import * as bcrypt from "bcryptjs";
import { addressUser } from "../../entities/addressUser.entity";

const userCreateService = async ({name, email,cpf,password,idade,isadm,address,cep,number,district,city,state}: IUserCreate) => {

    const userRepository = AppDataSource.getRepository(User) 
    const addressRepository = AppDataSource.getRepository(addressUser)

    const users = await userRepository.find()

    const alreadyExistsEmail = users.find((user) => user.email === email)
 
    const alreadyExistsCpf = users.find((user) => user.cpf === cpf)
   
    if(alreadyExistsEmail){
      throw new Error("Email already exists")
    }

    if(alreadyExistsCpf){
      throw new Error ("Cpf already exists")
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User()

    user.id = user.id
    user.name = name
    user.email = email
    user.cpf = cpf
    user.password = hashedPassword
    user.idade = idade
    user.isadm = isadm
    userRepository.create(user)
    userRepository.save(user)
    console.log(user.id,"id")
    

    const addressAll = new addressUser()
    addressAll.cep = cep
    addressAll.address = address
    addressAll.number = number
    addressAll.district = district
    addressAll.state = state
    addressAll.city = city
    addressAll.user = user
    addressRepository.create(addressAll)
    addressRepository.save(addressAll)

    const result = {
      id: user.id,
      name: user.name,
      email: user.email,
      address: addressAll.address,
      number: addressAll.number,
      cep: addressAll.cep,

      district: addressAll.district,
      city: addressAll.city,
      state: addressAll.state,
      created_at: addressAll.create_at,
      update_at: addressAll.update_at

    }
    return result

}
export default userCreateService