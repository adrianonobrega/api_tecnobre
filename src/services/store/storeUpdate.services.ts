import { AppDataSource } from "../../database"
import { StoreUpdate } from "../../interfaces/store"
import { Store } from "../../entities/store.entity"
import {hash} from "bcryptjs"



const updateStoreServices = async ({id,name,email,cnpj,password}: StoreUpdate) => {
    const storeRepository = AppDataSource.getRepository(Store)

    const hashedPassword = await hash(password,10)

    const findStore = await storeRepository.findOne({
        where:{
            id:id
        }
    })

        if(!findStore){
            throw new Error("Store not found")
        }
    

        const store = new Store();
 
        store.id = store.id    
        store.name = name ? name : store.name
        store.email = email ? email : store.email
        store.cnpj = cnpj ? cnpj : store.cnpj
        store.password = hashedPassword ? hashedPassword : store.password
        store.create_at = store.create_at
       
        const result = {
            id:id,
            name: store.name,
            email: store.email,
            cnpj: store.cnpj

        }

        await storeRepository.createQueryBuilder().update(store).set(store).where("id = :id", {id: id}).execute()
    
        return result
        
}


export default updateStoreServices