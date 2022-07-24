import { AppDataSource } from "../../database"
import { Store } from "../../entities/store.entity"

const storeListService = async () => {

    const storeRepository = AppDataSource.getRepository(Store)

    const stores = storeRepository.find()

    return stores
}
export default storeListService