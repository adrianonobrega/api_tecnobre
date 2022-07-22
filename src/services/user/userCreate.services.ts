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

    const emailAlreadyExists = users.find(user => user.email === email)

    if (emailAlreadyExists) {
        throw new Error("Email already exists")
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User()

    user.name = name
    user.email = email
    user.cpf = cpf
    user.password = hashedPassword
    user.idade = idade
    user.isadm = isadm
    userRepository.create(user)
    userRepository.save(user)

    const addressAll = new addressUser()
    addressAll.cep = cep
    addressAll.address = address
    addressAll.number = number
    addressAll.district = district
    addressAll.state = state
    addressAll.city = city
    addressRepository.create(addressAll)
    addressRepository.save(addressAll)


    const result = {
        id: user.id,
        email: user.email,
        idade: user.idade,
        isadm: user.isadm,
        endereco:addressAll
    }

    return result

}
export default userCreateService