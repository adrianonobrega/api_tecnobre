import { Login } from "../../interfaces/login";
import { AppDataSource } from "../../database";
import { User } from "../../entities/user.entity";
import { Store } from "../../entities/store.entity";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const loginServices = async({email,password}: Login) => {
    const userRepository = AppDataSource.getRepository(User)
    const storeRepository = AppDataSource.getRepository(Store)
    const users = await userRepository.find()
    const stores = await storeRepository.find()

    const accountUser = users.find((user) => user.email === email)
    const accountStore = stores.find((store) => store.email === email)

    const verification = accountStore === undefined ? accountUser : accountStore

    if(!verification){
        throw new Error("Wrong email/password")
    }
    
    if(!bcrypt.compareSync(password,verification.password)){
        throw new Error("Wrong email/password")
    }

    const token = {
        token:  jwt.sign(
            {email:email},
            String(process.env.JWT_SECRET),
            {expiresIn: '1d'}
        )
    }
       return token
    
}