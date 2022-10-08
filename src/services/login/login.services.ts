import { Login } from "../../interfaces/login";
import { AppDataSource } from "../../database";
import { User } from "../../entities/user.entity";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const loginServices = async({email,password}: Login) => {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()

    const account = users.find((user) => user.email === email)

    if(!account){
        throw new Error("Wrong email/password")
    }

    if(!bcrypt.compareSync(password,account.password)){
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