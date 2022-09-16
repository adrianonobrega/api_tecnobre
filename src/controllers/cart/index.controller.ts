import { Request,Response } from "express"
import { cartCreateService } from "../../services/cart/cartCreateStore.services"
import { cartListOneService } from "../../services/cart/cartListOne.services"
import { requestListService } from "../../services/cart/cartList.services"
import requestDeleteServices from "../../services/cart/cartDelete.services"
import {CartUpdateService} from "../../services/cart/cartUpdate.services"


const cartCreateController = async (req: Request, res: Response) => {
    
    try{
        const { id } = req.params;
        const {total_price,status, products } = req.body;

        const newOrder = await cartCreateService({id,status,total_price,products});

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

 const cartListController = async (req: Request, res: Response) => {

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


export {cartCreateController,cartDeleteController,cartListController,cartListOneController,cartUpdateController}