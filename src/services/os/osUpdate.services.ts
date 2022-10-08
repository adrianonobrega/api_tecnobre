import { AppDataSource } from "../../database";
import { Os } from "../../entities/Os.entity";
import { OsUpdate } from "../../interfaces/os";

 export const OsUpdateService = async ({id,status,total_price,name_equipament,description,image}:OsUpdate) => {
  const osRepository = AppDataSource.getRepository(Os);
  const osOne = await osRepository.findOne({where: {id:id}})

  if(!osOne){
    throw new Error("Invalid ordem service")
  }

  const os = new Os();

  os.id = osOne.id
  os.status = status || osOne.status
  os.description = description || osOne.description
  os.name_equipament = name_equipament || osOne.name_equipament
  os.total_price = total_price || osOne.total_price
  os.imagem = image || osOne.imagem

  await osRepository.createQueryBuilder().update(os).set(os).where("id = :id", { id: id }).execute()

  return os

};
