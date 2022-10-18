import { AppDataSource } from "../../database"
import { Os } from "../../entities/Os.entity"

export const osDeleteServices = async (id: string) => {
    const osRepository = AppDataSource.getRepository(Os)
    const osOne = await osRepository.findOne({where: {id:id}})

    if(!osOne){
      throw new Error("invalid work order")
    }
    await osRepository.createQueryBuilder().delete().from(Os).where("id = :id", { id }).execute();
}

