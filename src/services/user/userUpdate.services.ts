import { AppDataSource } from "../../database";
import { User } from "../../entities/user.entity";
import * as bcrypt from "bcryptjs";
import { UpdateUser } from "../../interfaces/user";


const userUpdateService = async ({id,name, email,password,idade}: UpdateUser) => {

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

    user.id = user.id
    user.name = name || user.name
    user.email = email || user.email
    user.cpf = user.cpf
    user.password = hashedPassword || user.password
    user.idade = idade || user.idade
    user.isadm = user.isadm
    
    
    const result = {
      id: id,
      name: user.name,
      email: user.email,
    }

    await userRepository.createQueryBuilder().update(user).set(user).where("id = :id", {id: id}).execute()

    return result

}
export default userUpdateService