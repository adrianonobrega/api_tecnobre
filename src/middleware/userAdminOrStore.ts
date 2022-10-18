import { Request,Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import "dotenv/config"
import { User } from "../entities/user.entity";
import { AppDataSource } from "../database";

export const userAdminOrStore = async(req: Request, res: Response, next: NextFunction) => {
 
      const token = req.headers.authorization?.split(" ")[1]
      const userRepository = AppDataSource.getRepository(User)
      const users = await userRepository.find()
      
      jwt.verify(
        token as string, 
        process.env.JWT_SECRET as string,
        (err: any, decoded: any) => {
            
            const user = users.find((user) => user.email === decoded.email)
            
            if(user?.isadm === true || user?.store === true){
                next()
            }
                
            else{
                return res.status(401).json({message: "User must have admin permission or be a store"})
            }
      })
  
}