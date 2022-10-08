import { loginServices } from "../../services/login/login.services"

const LoginController = async (req: Request, res: Response) => {
    
    try{
           const {email,password} = req.body
       
       const token = await userLoginServices({email,password})
   
       res.status(201).json(token)
       }
   
    catch(error){
       if(error instanceof Error){
           return res.status(400).json({
               message: error.message
               })
           }
       }
   }