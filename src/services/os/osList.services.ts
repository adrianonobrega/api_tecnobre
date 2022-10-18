
import { AppDataSource } from "../../database";
import { Os } from "../../entities/Os.entity";

export const osListService = async () => {
  const osRepository = AppDataSource.getRepository(Os)

  const osAll = await osRepository.find()

  const cart = osAll.map((ord) => {
    
    const obj = {
      id: ord?.id,
      name_equipament: ord.name_equipament,
      description: ord.description,
      status: ord?.status,
      imagem: ord.imagem,
      solution: ord.solution,
      
      total_price: ord?.total_price,
   
      user: {
        id: ord?.user.id,
        name: ord?.user.name,
        email: ord?.user.email,
        cnpj: ord?.user.cnpj,
      },
      address: ord?.user.address,
  
    }
    return obj
  })

 
  return cart

};