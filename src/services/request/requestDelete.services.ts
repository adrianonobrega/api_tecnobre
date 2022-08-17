import { AppDataSource } from "../../database"
import { Order } from "../../entities/userOrder.entity"




const requestDeleteServices = async (id: string) => {
    const requestRepository = AppDataSource.getRepository(Order)


  const request = await requestRepository.findOne({
    where:{
        id:id
  }
  })


  if(!request){
    throw new Error("Request not found")
}


 
  
await requestRepository.createQueryBuilder().delete().from(Order).where("id = :id", { id }).execute();

  
}

export default requestDeleteServices