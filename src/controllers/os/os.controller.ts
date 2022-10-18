import { Request,Response } from "express"
import { createOsService } from "../../services/os/osCreate.services"
import { osListService } from "../../services/os/osList.services"
import { OsOneListService } from "../../services/os/osListOne.services"
import { OsUpdateService } from "../../services/os/osUpdate.services"
import { osDeleteServices } from "../../services/os/osDelete.services"


const osCreateController = async (req: Request, res: Response) => {
    
 try{

        const {id} = req.params
        const {name_equipament, description, status, image,os} = req.body
    
    const product = await createOsService({id, name_equipament, description, status, image})

    res.status(201).json(product)
    }

 catch(error){
    if(error instanceof Error){
        return res.status(400).json({
            message: error.message
            })
        }
    }
}


const osListController = async (req: Request, res: Response) => {

   try{
    const os = await osListService()

    res.status(200).json(os)
   }

    catch(error){
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
    }
}

const OsListOneController = async (req: Request, res: Response) => {

    try{
    const {id} = req.params
    const os = await OsOneListService(id)

    res.status(200).json(os)
    }
 
     catch(error){
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
     }
 }

 const OsUpdateController = async (req: Request, res: Response) => {

    try{
    
    const {id} = req.params
    const {status,total_price,name_equipament,description,image} = req.body
    const os = await OsUpdateService({id,status,total_price,name_equipament,description,image})

    res.status(200).json(os)

    }
 
     catch(error){
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
     }
 }

 const osDeleteController = async (req: Request, res: Response) => {

    try{
        const {id} = req.params
        const os = await osDeleteServices(id)
        res.status(204).json(os)
    }
 
     catch(error){
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
     }
 }


export {osCreateController,osListController,OsListOneController,OsUpdateController,osDeleteController}