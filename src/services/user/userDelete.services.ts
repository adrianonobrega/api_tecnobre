import { AppDataSource } from "../../database"
import { User } from "../../entities/user.entity"
import { addressUser } from "../../entities/addressUser.entity"

const userDeleteService = async (id:string) => {

    const userRepository = AppDataSource.getRepository(User)
    const addressRepository = AppDataSource.getRepository(addressUser)

    const user = userRepository.findOne({
        where: {
            id:id
        }
    })

    // await addressRepository.createQueryBuilder().delete().from(addressUser).where("id = :id").execute();

    if (!user) {
        throw new Error("Store not found")
      }

      await userRepository.createQueryBuilder().delete().from(User).where("id = :id", { id }).execute();

   
}
export default userDeleteService