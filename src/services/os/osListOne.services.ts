import { AppDataSource } from "../../database"
import { Os } from "../../entities/Os.entity"

export const OsOneListService = async (id:string) => {

    const osRepository = AppDataSource.getRepository(Os)

    const osOne = await osRepository.findOne({where: {id:id}})
    
    if(!osOne){
        throw new Error("Invalid ordem service")
      }
     
      const os = [osOne].map((ord) => {
        const obj = {
          id: ord?.id,
          status: ord?.status,
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
      return os
}
