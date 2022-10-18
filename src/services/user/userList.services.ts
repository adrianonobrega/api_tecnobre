import { AppDataSource } from "../../database"
import { User } from "../../entities/user.entity"

export const userListService = async () => {

    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()

    const user = users.map((user) => {
        const obj = {
          id:user.id,
          name: user.name,
          email: user.email,
          cpf: user.cpf,
          cnpj:user.cnpj,
          store:user.store,
          birth_data: user.birth_data,
          isadm: user.isadm,
          group: user.group,
          address: user.address,
          created_at: user.created_at,
          updated_at:user.updated_at
        }
        return obj
       })
    
        return user
}
