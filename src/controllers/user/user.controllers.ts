import { Request,Response } from "express"
import {userCreateService} from "../../services/user/userCreate.services"
import {userListService} from "../../services/user/userList.services"
import {userOneListService} from "../../services/user/userOneList.services"
import {userUpdateService} from "../../services/user/userUpdate.services"
import {userDeleteService} from "../../services/user/userDelete.services"


const userCreateController = async (req: Request, res: Response) => {
    
 try{

    const {name, email,cpf,cnpj,password,birth_data,isAdm,address,cep,number,district,city,state} = req.body
    
    const newUser = await userCreateService({name, email,cpf,cnpj,password,birth_data,isAdm,address,cep,number,district,city,state})

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

const userListOneController = async (req: Request, res: Response) => {

    
    try{
     const {id} = req.params   
     const users = await userOneListService(id)
 
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

 const userUpdateController = async (req: Request, res: Response) => {
    
    try{
   
         const {id} = req.params  
         const {name, email,password,birth_data} = req.body
       
       const newUser = await userUpdateService({id,name, email,password,birth_data})
   
       res.status(200).json(newUser)
       }
   
    catch(error){
       if(error instanceof Error){
           return res.status(400).json({
               message: error.message
               })
           }
       }
   }

   const userDeleteController = async (req: Request, res: Response) => {

    const {id} = req.params
    try{
     const users = await userDeleteService(id)
 
     res.status(204).json(users)
    }
 
     catch(error){
         if(error instanceof Error){
             return res.status(400).json({
                 message: error.message
             })
         }
     }
 }


export {userCreateController,userListController,userListOneController,userUpdateController,userDeleteController}