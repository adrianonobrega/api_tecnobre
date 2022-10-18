import { Request,Response } from "express"
import {AddresUserCreateServices} from "../../services/user/addressUserCreate.services"

const userAddressControllers = async (req: Request, res: Response) => {
    
    try{
   
           
         const {user_id,address,cep,number,district,city,state} = req.body
       
       const newUser = await AddresUserCreateServices({user_id,address,cep,number,district,city,state})
   
       res.status(201).json(newUser)
       }
   
    catch(error){
       if(error instanceof Error){
           return res.status(400).json({
               message: error.message
               })
           }
       }
   }
   

   
   


   export{userAddressControllers}