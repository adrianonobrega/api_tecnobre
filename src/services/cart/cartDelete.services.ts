import { AppDataSource } from "../../database"
import { Cart } from "../../entities/cart.entity"




const requestDeleteServices = async (id: string) => {
    const requestRepository = AppDataSource.getRepository(Cart)


  const request = await requestRepository.findOne({
    where:{
        id:id
  }
  })


  if(!request){
    throw new Error("Cart not found")
}


 
  
await requestRepository.createQueryBuilder().delete().from(Cart).where("id = :id", { id }).execute();

  
}

export default requestDeleteServices