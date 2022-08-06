import { Request,Response } from "express"
import storeCreateService from "../../services/store/storeCreate.services"
import storeListService from "../../services/store/storeList.services"
import storeListOne from "../../services/store/storeLisrtOne.services"
import storeDeleteServices from "../../services/store/storeDelete.services"
import updateStoreServices from "../../services/store/storeUpdate.services"



const productCreateController = async (req: Request, res: Response) => {
    
 try{

        
        const {name, email,cnpj,password,isadm,address,cep,number,district,city,state} = req.body
    
    const product = console.log("olá")

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

// src/controllers/user/userList.controller.ts
const productListController = async (req: Request, res: Response) => {

   try{
    const product = console.log("olá")

    res.status(200).json(product)
   }

    catch(error){
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
    }
}

const productListOneController = async (req: Request, res: Response) => {

    try{
    const {id} = req.params
    const product = console.log("olá")

    res.status(200).json(product)
    }
 
     catch(error){
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
     }
 }

 const productUpdateController = async (req: Request, res: Response) => {

    try{
    
    const {id} = req.params
    const {name,email, cnpj, password} = req.body
    const product = console.log("olá")

    res.status(200).json(product)

    }
 
     catch(error){
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
     }
 }

 const productDeleteController = async (req: Request, res: Response) => {

    try{
        const {id} = req.params
        const product = console.log("olá")

    res.status(204).json(product)
    }
 
     catch(error){
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
     }
 }


export {productCreateController,productListController,productListOneController,productUpdateController,productDeleteController}