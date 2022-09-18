import { AppDataSource } from "../../database";
import { Cart } from "../../entities/cart.entity";


export const cartListOneService = async (id: string) => {
  const cartRepository = AppDataSource.getRepository(Cart);

  const cartOne = await cartRepository.findOne({where: {id:id}})

  console.log(id.length,"length")

  if(!cartOne){
    throw new Error("Invalid Store")
  }
 
  const cart = [cartOne].map((ord) => {
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