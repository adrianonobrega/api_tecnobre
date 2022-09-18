
import { AppDataSource } from "../../database";
import { Cart } from "../../entities/cart.entity";

export const requestListService = async () => {
  const cartRepository = AppDataSource.getRepository(Cart)

  const cartAll = await cartRepository.find()

  console.log(cartAll)

  const cart = cartAll.map((ord) => {
    console.log(ord)
    const obj = {
      id: ord?.id,
      status: ord?.status,
      total_price: ord?.total_price,
      products: ord?.product,
      store: {
        id: ord?.store.id,
        name: ord?.store.name,
        email: ord?.store.email,
        cnpj: ord?.store.cnpj,
      },
      address: ord?.store.address,
  
    }
    return obj
  })

 
  return cart

};