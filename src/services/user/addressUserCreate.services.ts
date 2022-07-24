import { AppDataSource } from "../../database";
import { User } from "../../entities/user.entity";
import { addressUser } from "../../entities/addressUser.entity";
import { AddresUser } from "../../interfaces/user";


const AddresUserCreateServices = async ({user_id,address,cep,number,district,city,state}: AddresUser) => {

    const userRepository = AppDataSource.getRepository(User) 
    const addressRepository = AppDataSource.getRepository(addressUser)

    const user = await userRepository.findOne({
      where: {
        id: user_id
      }
    })
  
    if (!user) {
      throw new Error("User not found")
    }

    const addressAll = new addressUser()
    addressAll.id = addressAll.id
    addressAll.user = user
    addressAll.cep = cep
    addressAll.address = address
    addressAll.number = number
    addressAll.district = district
    addressAll.state = state
    addressAll.city = city
    addressAll.create_at = addressAll.create_at
    addressAll.update_at = addressAll.update_at

    
    

    const result = {
      
    user : user,
    id : addressAll.id,
    cep : cep,
    address : address,
    number : number,
    district : district,
    state : state,
    city : city,
    create_at : addressAll.create_at,
    update_at : addressAll.update_at
    }
    addressRepository.create(addressAll)
    addressRepository.save(addressAll)
    return result

}
export default AddresUserCreateServices