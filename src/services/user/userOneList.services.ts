import { AppDataSource } from "../../database"
import { User } from "../../entities/user.entity"

const userOneListService = async (id:string) => {

    const userRepository = AppDataSource.getRepository(User)

    const users = userRepository.findOne({
        where: {
            id:id
        }
    })

    if(!users){
        throw new Error("User not found")
    }
    

    return users
}
export default userOneListService