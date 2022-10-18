import { Request,Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import "dotenv/config"

export const authUser = (req: Request, res: Response, next: NextFunction) => {
  try {
      const token = req.headers.authorization?.split(" ")[1]
      
      jwt.verify(
        token as string, 
        process.env.JWT_SECRET as string,
        (err: any, decoded: any) => {
          
          
          req.userEmail = decoded.email
          console.log(decoded.email,"email")
          
          next()
      })
  } catch (error) {
      return res.status(401).json({message: "Invalid Token"})
  }
}