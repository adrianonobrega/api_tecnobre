import { AppDataSource } from "../../database";
import { User } from "../../entities/user.entity";
import { addressUser } from "../../entities/addressUser.entity";
import { AddresUser } from "../../interfaces/user";


export const AddresUserCreateServices = async ({user_id,address,cep,number,district,city,state}: AddresUser) => {

    const userRepository = AppDataSource.getRepository(User) 
    const addressRepository = AppDataSource.getRepository(addressUser)

    const findUser = await userRepository.findOne({
      where: {
        id: user_id
      }
    })
  
    if (!findUser) {
      throw new Error("User not found")
    }

    const addressAll = new addressUser()
    addressAll.id = addressAll.id
    addressAll.user = findUser
    addressAll.cep = cep
    addressAll.address = address
    addressAll.number = number
    addressAll.district = district
    addressAll.state = state
    addressAll.city = city
    addressAll.created_at = addressAll.created_at
    addressAll.updated_at = addressAll.updated_at

    const result = {
      
    user : findUser,
    id : addressAll.id,
    cep : cep,
    address : address,
    number : number,
    district : district,
    state : state,
    city : city,
    create_at : addressAll.created_at,
    update_at : addressAll.updated_at
    }
    addressRepository.create(addressAll)
    addressRepository.save(addressAll)
    return result
}
