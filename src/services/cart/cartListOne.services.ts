import { AppDataSource } from "../../database";
import { Cart } from "../../entities/cart.entity";


export const cartListOneService = async (id: string) => {
  const cartRepository = AppDataSource.getRepository(Cart);

  const cartOne = await cartRepository.findOne({where: {id:id}})


  if(!cartOne){
    throw new Error("Invalid cart")
  }
 
  const cart = [cartOne].map((ord) => {
    const obj = {
      id: ord?.id,
      status: ord?.status,
      total_price: ord?.total_price,
      products: ord?.product,
      user: {
        id: ord?.user.id,
        name: ord?.user.name,
        email: ord?.user.email,
        cpf: ord.user.cpf,
        cnpj: ord?.user.cnpj,
      },
      address: ord?.user.address,
  
    }
    return obj
  })
  return cart
};