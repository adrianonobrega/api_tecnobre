import { Request,Response } from "express"
import userCreateService from "../../services/user/userCreate.services"
import userListService from "../../services/user/userList.services"



const userCreateController = async (req: Request, res: Response) => {
    
 try{
        const {name, email,cpf,password,idade,isadm,address,cep,number,district,city,state} = req.body
    
    const newUser = await userCreateService({name, email,cpf,password,idade,isadm,address,cep,number,district,city,state})

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

// src/controllers/user/userList.controller.ts
const userListController = async (req: Request, res: Response) => {

   try{
    const users = await userListService()

    res.status(200).json(users)
   }

    catch(error){
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
    }
}

export {userCreateController,userListController}