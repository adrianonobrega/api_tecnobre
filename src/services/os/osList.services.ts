
import { AppDataSource } from "../../database";
import { Os } from "../../entities/Os.entity";

export const osListService = async () => {
  const osRepository = AppDataSource.getRepository(Os)

  const osAll = await osRepository.find()

  const cart = osAll.map((ord) => {
    console.log(ord,"dasdjsa")
    const obj = {
      id: ord?.id,
      name_equipament: ord.name_equipament,
      description: ord.description,
      status: ord?.status,
      imagem: ord.imagem,
      solution: ord.solution,
      
      total_price: ord?.total_price,
   
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