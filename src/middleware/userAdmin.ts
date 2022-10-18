import { Request,Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import "dotenv/config"
import { User } from "../entities/user.entity";
import { AppDataSource } from "../database";

export const userAdmin = async(req: Request, res: Response, next: NextFunction) => {
 
      const token = req.headers.authorization?.split(" ")[1]
      const userRepository = AppDataSource.getRepository(User)
      const users = await userRepository.find()
      
      jwt.verify(
        token as string, 
        process.env.JWT_SECRET as string,
        (err: any, decoded: any) => {
            
            const user = users.find((user) => user.email === decoded.email)
            
            if(user?.isadm === true){
                next()
            }
                
            else{
                return res.status(401).json({message: "User must have admin permission"})
            }
      })
  
}