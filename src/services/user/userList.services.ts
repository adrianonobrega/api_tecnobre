import { AppDataSource } from "../../database"
import { User } from "../../entities/user.entity"

const userListService = async () => {

    const userRepository = AppDataSource.getRepository(User)

    const users = userRepository.find()

    return users
}
export default userListService