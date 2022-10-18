import { AppDataSource } from "../../database";
import { User } from "../../entities/user.entity";
import * as bcrypt from "bcryptjs";
import { UpdateUser } from "../../interfaces/user";


export const userUpdateService = async ({id,name, email,password,birth_data}: UpdateUser) => {

    const userRepository = AppDataSource.getRepository(User) 

    const findUser = await userRepository.findOne({
        where:{
            id:id
        }
    })
  
    if(!findUser){
        throw new Error("User not found")
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User()

    user.id = findUser.id
    user.name = name || findUser.name
    user.email = email || findUser.email
    user.cpf = findUser.cpf
    user.password = hashedPassword || findUser.password
    user.birth_data = birth_data || findUser.birth_data
    user.isadm = findUser.isadm
    
    
    const result = {
        id:user.id,
        name : user.name,
        email :user.email,
        cpf : user.cpf,
        birth_data : user.birth_data,
        isadm : user.isadm,
        created_at: findUser.created_at,
        updated_at: findUser.updated_at

    }

    await userRepository.createQueryBuilder().update(user).set(user).where("id = :id", {id: id}).execute()
    console.log(result)
    return result

}