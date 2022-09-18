import { AppDataSource } from "../../database";
import { Cart } from "../../entities/cart.entity";
import { CartUpdate } from "../../interfaces/cart";

 export const CartUpdateService = async ({id,status}:CartUpdate) => {
  const cartRepository = AppDataSource.getRepository(Cart);

  const cart = new Cart();

  cart.id = cart.id
  cart.status = status
 
  await cartRepository.createQueryBuilder().update(cart).set(cart).where("id = :id", { id: id }).execute()

  return cart

};
