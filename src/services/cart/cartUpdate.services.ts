import { AppDataSource } from "../../database";
import { Order } from "../../entities/request.entity";
import { RequestUpdate } from "../../interfaces/cart";

 export const CartUpdateService = async ({id,status}:RequestUpdate) => {
  const cartRepository = AppDataSource.getRepository(Order);

  const cart = new Order();

  cart.id = cart.id
  cart.status = status
 
  await cartRepository.createQueryBuilder().update(cart).set(cart).where("id = :id", { id: id }).execute()

  return cart

};
