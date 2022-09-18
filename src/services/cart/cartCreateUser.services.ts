import { CartStore } from "../../interfaces/cart"
import { AppDataSource } from "../../database";
import { User } from "../../entities/user.entity";
import { Cart } from "../../entities/cart.entity";

export const cartCreateUserService = async ({id,status,total_price,products}: CartStore) => {

    const cartRepository = AppDataSource.getRepository(Cart);
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({ id: id })

    if(!user){
      throw new Error("Usuario não existe")
    }
    
    const newOrder = new Cart();
    newOrder.status = status;
    newOrder.product = products
    newOrder.user = user;
    newOrder.total_price = total_price;
    await cartRepository.save(newOrder);

    const CartRep = [await cartRepository.findOneBy({ id: newOrder.id })]

    const cart = CartRep.map((ord) => {
      const obj = {
        id: ord?.id,
        status: ord?.status,
        total_price: ord?.total_price,
        products: ord?.product,
        user: {
          id: ord?.user.id,
          name: ord?.user.name,
          email: ord?.user.email,
          cpf: ord?.user.cpf,
        },
        address: ord?.user.address,
        created_at: ord?.create_at,
        updated_at: ord?.update_at
      }
      return obj
    })
    return cart
}