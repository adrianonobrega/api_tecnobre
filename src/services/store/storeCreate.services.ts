import { IUserCreate, IUser } from "../../interfaces/user";
import { AppDataSource } from "../../database";
import { addressStore } from "../../entities/addressStoreCreate.entity";
import { Store } from "../../entities/store.entity";
import * as bcrypt from "bcryptjs";
import { AddresStore } from "../../interfaces/store";
import { IStoreCreate } from "../../interfaces/store";

const storeCreateService = async ({name, email,cnpj,password,isadm,address,cep,number,district,city,state}: IStoreCreate) => {

    const userRepository = AppDataSource.getRepository(Store) 
    const addressRepository = AppDataSource.getRepository(addressStore)

    const stores = await userRepository.find()

    const alreadyExistsEmail = stores.find((store) => store.email === email)
 
    const alreadyExistsCpf = stores.find((store) => store.cnpj === cnpj)
   
    if(alreadyExistsEmail){
      throw new Error("Email already exists")
    }

    if(alreadyExistsCpf){
      throw new Error ("Cpf already exists")
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const store = new Store()

    // store.id = user.id
    store.name = name
    store.email = email
    store.cnpj = cnpj
    store.password = hashedPassword
    store.isadm = isadm
    userRepository.create(store)
    userRepository.save(store)
   
    

    const addressAll = new addressStore()
    addressAll.cep = cep
    addressAll.address = address
    addressAll.number = number
    addressAll.district = district
    addressAll.state = state
    addressAll.city = city
    // addressAll.user = user
    addressRepository.create(addressAll)
    addressRepository.save(addressAll)

    const result = {
      id: store.id,
      name: store.name,
      email: store.email,
      address: addressAll.address,
      number: addressAll.number,
      cep: addressAll.cep,

      district: addressAll.district,
      city: addressAll.city,
      state: addressAll.state,
      created_at: addressAll.create_at,
      update_at: addressAll.update_at

    }
    return result

}
export default storeCreateService