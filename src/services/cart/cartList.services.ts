
import { AppDataSource } from "../../database";
import { Cart } from "../../entities/cart.entity";

export const requestListService = async () => {
  const cartRepository = AppDataSource.getRepository(Cart)

  const cartAll = await cartRepository.find()

  const cart = cartAll.map((ord) => {

    const obj = {
      id: ord.id,
      status: ord?.status,
      total_price: ord?.total_price,
      products: ord?.product,
      user: ord.user === null ? false : {
        id:ord.user.id,
        name: ord.user.name,
        address: ord.user.address
      },
    }
    return obj
  })

 
  return cart

};