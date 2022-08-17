import { RequestUser } from "../../interfaces/request"
import { AppDataSource } from "../../database";
import { Store } from "../../entities/store.entity";
import { Order } from "../../entities/userOrder.entity";
import { User } from "../../entities/user.entity";
import { addressUser } from "../../entities/addressUser.entity";





export const requestUserService = async ({ user_id,total_price,products,status }: RequestUser) => {

    const userOrderRepository = AppDataSource.getRepository(Order);
    const addressesRepository = AppDataSource.getRepository(addressUser);
    const usersRepository = AppDataSource.getRepository(User);
 
    const userAll = await usersRepository.find()

    const user = await usersRepository.findOne({
        where: {
          id: user_id
        }
      })

    

      if (!user || user_id === undefined) {
        throw new Error("Invalid user")
      }
     

    //   const address = await addressesRepository.findOne({
    //     where: {
    //       id: address_id
    //     }
    //   })

    //   if (!address) {
    //     throw new Error("Invalid address")
    //   }

      


      const newRequest = new Order()

      newRequest.id = newRequest.id
      newRequest.status = status
      newRequest.product = products
      newRequest.user = user
      newRequest.total_price = total_price

      await userOrderRepository.save(newRequest)

      
      return newRequest
}