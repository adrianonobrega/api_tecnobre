import { Request,Response } from "express"
import { createProductService } from "../../services/product/productCreate.services"
import {listProductServices} from "../../services/product/productList.services"
import {productListOneServices} from "../../services/product/productListOne.services"
import {productUpdateService} from "../../services/product/productUpdate.services"
import {productDeleteServices} from "../../services/product/productDelete.services"


const productCreateController = async (req: Request, res: Response) => {
    
 try{

        const {store_id} = req.params
        const {name, description, brand, category, image, price} = req.body
    
    const product = await createProductService({store_id,name, description, brand, category, image, price})

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
    const product = await listProductServices()

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
    const product = await productListOneServices(id)

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
    const {name, description, brand, category, image, price} = req.body
    const product = await productUpdateService({id,name, description, brand, category, image, price})

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
        const product = await productDeleteServices(id)

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