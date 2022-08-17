import { RequestStore } from "../../interfaces/request"
import { AppDataSource } from "../../database";
import { Store } from "../../entities/store.entity";
import { Order } from "../../entities/userOrder.entity";
import { User } from "../../entities/user.entity";
import { addressUser } from "../../entities/addressUser.entity";





export const requestStoreService = async ({ store_id,total_price,products,status }: RequestStore) => {

    const userOrderRepository = AppDataSource.getRepository(Order);
    const addressesRepository = AppDataSource.getRepository(addressUser);
    const storeRepository = AppDataSource.getRepository(Store);
    const usersRepository = AppDataSource.getRepository(User);
 

    const store = await storeRepository.findOne({
        where: {
          id: store_id
        }
      })

    

      if (!store || store_id === undefined) {
        throw new Error("Invalid store")
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

      newRequest.status = status
      newRequest.product = products
      newRequest.store = store
      newRequest.total_price = total_price

      await userOrderRepository.save(newRequest)

      return newRequest
}