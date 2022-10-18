import { AppDataSource } from "../../database"
import { User } from "../../entities/user.entity"
import { addressUser } from "../../entities/addressUser.entity"

export const userDeleteService = async (id:string) => {

    const userRepository = AppDataSource.getRepository(User)
    const addressRepository = AppDataSource.getRepository(addressUser)

    const findUser = userRepository.findOne({
        where: {
            id:id
        }
    })

    if (!findUser) {
        throw new Error("Store not found")
      }

      await userRepository.createQueryBuilder().delete().from(User).where("id = :id", { id }).execute();
}
