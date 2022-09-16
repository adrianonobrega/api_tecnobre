
import { AppDataSource } from "../../database";
import { Order } from "../../entities/request.entity";

export const requestListService = async () => {
  const cartRepository = AppDataSource.getRepository(Order)

  const cartAll = await cartRepository.find()


  const cart = cartAll.map((ord) => {
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