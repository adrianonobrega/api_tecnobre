import { Request,Response } from "express"
import { cartListOneService } from "../../services/cart/cartListOne.services"
import { requestListService } from "../../services/cart/cartList.services"
import requestDeleteServices from "../../services/cart/cartDelete.services"
import {CartUpdateService} from "../../services/cart/cartUpdate.services"
import { cartCreateUserService } from "../../services/cart/cartCreateUser.services"


   const cartCreateUserController = async (req: Request, res: Response) => {
    
    try{
        const { id } = req.params;
        const {total_price,status, products,os } = req.body;

        const newOrder = await cartCreateUserService({id,status,total_price,products,os});

        return res.status(201).json(newOrder);
       }
   
    catch(error){
       if(error instanceof Error){
           return res.status(400).json({
               message: error.message
               })
           }
       }
   }

const cartListOneController = async (req: Request, res: Response) => {

    try{
    const {id} = req.params
    const request = await cartListOneService(id)
    return res.status(200).json(request)

    }
 
     catch(error){
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
     }
 }

 const cartListController = async (req: Request, res: Response) => {

    try{
    const request = await requestListService()
    return res.status(200).json(request)

    }
 
     catch(error){
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
     }
 }

 const cartUpdateController = async (req: Request, res: Response) => {

    try{
    
    const {id} = req.params
    const {status} = req.body
    const request = await CartUpdateService({id,status})
    return res.status(200).json(request)

    }
 
     catch(error){
        if(error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
     }
 }

 const cartDeleteController = async (req: Request, res: Response) => {

    try{
        const {id} = req.params
        const request = await requestDeleteServices(id)
        return res.status(204).json(request)
    
        }
     
         catch(error){
            if(error instanceof Error){
                return res.status(400).json({
                    message: error.message
                })
            }
         }
 }


export {cartCreateUserController,cartDeleteController,cartListController,cartListOneController,cartUpdateController}