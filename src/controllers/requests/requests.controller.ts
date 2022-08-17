import { Request,Response } from "express"
import { requestStoreService } from "../../services/request/requestStoreCreate.services"
import { requestUserService } from "../../services/request/requestUserCreate.services"
import { requestUserListOneService } from "../../services/request/requestListOne.services"
import { requestListService } from "../../services/request/requestList.services"
import requestDeleteServices from "../../services/request/requestDelete.services"
import requestUpdateService from "../../services/request/requestUpdate.services"

const requestStoreCreateController = async (req: Request, res: Response) => {
    
 try{

        
        const {store_id,total_price,products,status} = req.body
    
     const newRequest = await requestStoreService({store_id,total_price,products,status})

    res.status(201).json(newRequest)
    }

 catch(error){
    if(error instanceof Error){
        return res.status(400).json({
            message: error.message
            })
        }
    }
}

const requestUserCreateController = async (req: Request, res: Response) => {
    
    try{
   
           
           const {user_id,total_price,products,status} = req.body
       
        const newRequest = await requestUserService({user_id,total_price,products,status})
   
       res.status(201).json(newRequest)
       }
   
    catch(error){
       if(error instanceof Error){
           return res.status(400).json({
               message: error.message
               })
           }
       }
   }

const requestUserListOneController = async (req: Request, res: Response) => {

    try{
    const {id} = req.params
    const request = await requestUserListOneService(id)
    return res.status(201).json(request)

    }
 
     catch(error){
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
     }
 }

 const requestListController = async (req: Request, res: Response) => {

    try{
    const request = await requestListService()
    return res.status(201).json(request)

    }
 
     catch(error){
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
     }
 }

 const requestUpdateController = async (req: Request, res: Response) => {

    try{
    
    const {id} = req.params
    const {status} = req.body
    const request = await requestUpdateService({id,status})
    return res.status(201).json(request)

    }
 
     catch(error){
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
     }
 }

 const requestDeleteController = async (req: Request, res: Response) => {

    try{
        const {id} = req.params
        const request = await requestDeleteServices(id)
        return res.status(201).json(request)
    
        }
     
         catch(error){
            if(error instanceof Error){
                return res.status(400).json({
                    message: error.message
                })
            }
         }
 }


export {requestStoreCreateController,requestUserCreateController,requestDeleteController,requestListController,requestUserListOneController,requestUpdateController}