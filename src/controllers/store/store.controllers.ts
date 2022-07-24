import { Request,Response } from "express"
import storeCreateService from "../../services/store/storeCreate.services"
import storeListService from "../../services/store/storeList.services"



const storeCreateController = async (req: Request, res: Response) => {
    
 try{

        
        const {name, email,cnpj,password,isadm,address,cep,number,district,city,state} = req.body
    
    const newStore = await storeCreateService({name, email,cnpj,password,isadm,address,cep,number,district,city,state})

    res.status(201).json(newStore)
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
const storeListController = async (req: Request, res: Response) => {

   try{
    const users = await storeListService()

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

export {storeCreateController,storeListController}