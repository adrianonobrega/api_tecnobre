import { AppDataSource } from "../../database"
import { User } from "../../entities/user.entity"

export const userOneListService = async (id:string) => {

    const userRepository = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOne({where: {id:id}})

    if(!findUser){
        throw new Error("User not found")
    }

    const user = [findUser].map((user) => {
        const obj = {
          id:user.id,
          name: user.name,
          email: user.email,
          cpf: user.cpf,
          birth_data: user.birth_data,
          isadm: user.isadm,
          store: user.store,
          group: user.group,
          address: user.address,
          created_at: user.created_at,
          updated_at:user.updated_at
        }
        return obj
       })
        return user
}
