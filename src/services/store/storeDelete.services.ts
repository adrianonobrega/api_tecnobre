import { AppDataSource } from "../../database"
import { addressStore } from "../../entities/addressStoreCreate.entity"
import { Store } from "../../entities/store.entity"




const storeDeleteServices = async (id: string) => {
  const storeRepository = AppDataSource.getRepository(Store)
  const addressesRepository = AppDataSource.getRepository(addressStore)

  const store = await storeRepository.findOne({
    where: {
      id: id
    }
  })

  


  await addressesRepository.createQueryBuilder().delete().from(addressStore).where("id = :id", { id: store!.address.id }).execute();

  if (!store) {
    throw new Error("Store not found")
  }

  await storeRepository.createQueryBuilder().delete().from(Store).where("id = :id", { id }).execute();
}

export default storeDeleteServices