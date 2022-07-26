
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
      user: {
        id:ord.user.id,
        name: ord.user.name,
        cpf: ord.user.cpf,
        cnpj: ord.user.cnpj,
        address: ord.user.address
      },
    }
    return obj
  })

 
  return cart

};