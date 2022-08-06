import { AppDataSource } from "../../database"
import { Store } from "../../entities/store.entity"




const storeListOne = async (id: string) => {
    const storeRepository = AppDataSource.getRepository(Store)


  const store = await storeRepository.findOne({
    where:{
        id:id
  }
  })


  if(!store){
    throw new Error("Store not found")
}


 
  
return store

  
}

export default storeListOne