import { OsRequest } from "../../interfaces/os"
import { AppDataSource } from "../../database"
import { Os } from "../../entities/Os.entity"
import { User } from "../../entities/user.entity"



export const createOsService = async ({ id, name_equipament, description, status, image}: OsRequest) => {
  const osRepository = AppDataSource.getRepository(Os);
  const userRepository = AppDataSource.getRepository(User)


  const user = await userRepository.findOneBy({id:id})

  if(!user){
      throw new Error("User not found")
  }
    const newOs = new Os();
    newOs.id = newOs.id
    newOs.name_equipament = name_equipament
    newOs.description = description
    newOs.status = status;
    newOs.user = user;
    await osRepository.save(newOs);

    const osRep = [await osRepository.findOneBy({ id: newOs.id })]

    const os = osRep.map((ord) => {
      const obj = {
        id: ord?.id,
        name_equipament: name_equipament,
        description: description,
        solution:"Aguardando avaliação do técnico",
        imagem:image,
        status: ord?.status,
        total_price: ord?.total_price,
        user: {
          id: ord?.user.id,
          name: ord?.user.name,
          email: ord?.user.email,
          cnpj: ord?.user.cnpj,
        },
        address: ord?.user.address,
        created_at: ord?.created_at,
        updated_at: ord?.updated_at
      }
      return obj
    })
    return os

}