import { AppDataSource } from "../../database";
import { Order } from "../../entities/request.entity";

export const cartListOneService = async (id: string) => {
  const cartRepository = AppDataSource.getRepository(Order);

  const cartOne = [await cartRepository.findOne({where: {id:id}})]

  console.log(cartOne)

  if(cartOne === null){
    throw new Error("Invalid Store")
  }
  const cart = cartOne.map((ord) => {
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