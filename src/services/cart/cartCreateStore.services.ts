import { CartStore } from "../../interfaces/cart"
import { AppDataSource } from "../../database";
import { Store } from "../../entities/store.entity";
import { Cart } from "../../entities/cart.entity";

export const cartCreateStoreService = async ({id,status,total_price,products,os}: CartStore) => {

    const cartRepository = AppDataSource.getRepository(Cart);
    const storesRepository = AppDataSource.getRepository(Store);

    const store = await storesRepository.findOneBy({ id: id })

    if(!store){
      throw new Error("Loja não existe")
    }
    
    const newOrder = new Cart();
    newOrder.status = status;
    newOrder.product = products
    // newOrder.os = os
    newOrder.store = store;
    newOrder.total_price = total_price;
    await cartRepository.save(newOrder);

    const CartRep = [await cartRepository.findOneBy({ id: newOrder.id })]

    const cart = CartRep.map((ord) => {
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
        // os:ord?.os,
        address: ord?.store.address,
        created_at: ord?.create_at,
        updated_at: ord?.update_at
      }
      return obj
    })
    return cart
}