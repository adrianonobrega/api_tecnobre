import { Request,Response } from "express"
import { createOsService } from "../../services/os/osCreate.services"
import { osListService } from "../../services/os/osList.services"


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

// const productListOneController = async (req: Request, res: Response) => {

//     try{
//     const {id} = req.params
//     const product = await productListOneServices(id)

//     res.status(200).json(product)
//     }
 
//      catch(error){
//         if(error instanceof Error){
//             return res.status(400).json({
//                 message: error.message
//             })
//         }
//      }
//  }

//  const productUpdateController = async (req: Request, res: Response) => {

//     try{
    
//     const {id} = req.params
//     const {name, description, brand, category, image, price} = req.body
//     const product = productUpdateService({id,name, description, brand, category, image, price})

//     res.status(200).json(product)

//     }
 
//      catch(error){
//         if(error instanceof Error){
//             return res.status(400).json({
//                 message: error.message
//             })
//         }
//      }
//  }

//  const productDeleteController = async (req: Request, res: Response) => {

//     try{
//         const {id} = req.params
//         const product = await productDeleteServices(id)

//     res.status(204).json(product)
//     }
 
//      catch(error){
//         if(error instanceof Error){
//             return res.status(400).json({
//                 message: error.message
//             })
//         }
//      }
//  }


export {osCreateController,osListController}