import { AppDataSource } from "../../database"
import { Os } from "../../entities/Os.entity"

export const OsOneListService = async (id:string) => {

    const osRepository = AppDataSource.getRepository(Os)

    const osOne = await osRepository.findOne({where: {id:id}})
    
    if(!osOne){
        throw new Error("invalid work order")
      }
     
      const os = [osOne].map((ord) => {
        const obj = {
          id: ord?.id,
          status: ord?.status,
          total_price: ord?.total_price,
          user: {
            id: ord?.user.id,
            name: ord?.user.name,
            email: ord?.user.email,
            cnpj: ord?.user.cnpj,
            cpf: ord?.user.cpf
          },
          address: ord?.user.address,
      
        }
        return obj
      })
      return os
}
