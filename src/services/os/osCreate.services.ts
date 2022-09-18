import { OsRequest } from "../../interfaces/os"
import { AppDataSource } from "../../database"
import { Os } from "../../entities/Os.entity"
import { Store } from "../../entities/store.entity"
import { User } from "../../entities/user.entity"



export const createOsService = async ({ id, name_equipament, description, status, image}: OsRequest) => {
  const osRepository = AppDataSource.getRepository(Os);
  const storesRepository = AppDataSource.getRepository(Store);

  const store = await storesRepository.findOneBy({ id: id })

    if(!store){
      throw new Error("Loja não existe")
    }

    const newOs = new Os();
    newOs.id = newOs.id
    newOs.name_equipament = name_equipament
    newOs.description = description
    newOs.status = status;
    newOs.store = store;
    
    await osRepository.save(newOs);

    const osRep = [await osRepository.findOneBy({ id: newOs.id })]

    const os = osRep.map((ord) => {
      const obj = {
        id: ord?.id,
        name_equipament: name_equipament,
        description: description,
        solution:"...",
        imagem:image,
        status: ord?.status,
        total_price: ord?.total_price,
        
        
        store: {
          id: ord?.store.id,
          name: ord?.store.name,
          email: ord?.store.email,
          cnpj: ord?.store.cnpj,
        },
        
        address: ord?.store.address,
        created_at: ord?.create_at,
        updated_at: ord?.update_at
      }
      return obj
    })
    return os

}