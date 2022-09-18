import { OsRequest } from "../../interfaces/os"
import { AppDataSource } from "../../database"
import { Os } from "../../entities/Os.entity"
import { Store } from "../../entities/store.entity"
import { User } from "../../entities/user.entity"



export const createOsService = async ({ id, name_equipament, description, status, image}: OsRequest) => {
  const OsRepository = AppDataSource.getRepository(Os)
  const storeRepository = AppDataSource.getRepository(Store)
  const userRepository = AppDataSource.getRepository(User)

  const store = await storeRepository.findOne({where: {id: id}})

  if (!store) {
    throw new Error("Store not found")
  }



  const osAll = new Os();
  osAll.id = osAll.id
  osAll.name_equipament = name_equipament
  osAll.description = description
  osAll.description = status
  osAll.imagem = image
  osAll.status = status
  osAll.store = store

  OsRepository.create(osAll)
  await OsRepository.save(osAll)

  const result = {
    
    id: osAll.id,
    name_equipament: osAll.name_equipament,
    description: osAll.description,
    status: osAll.status,
    total_price: osAll.total_price,
    image: osAll.imagem,
    store: osAll.store
    
  }

  return result
}