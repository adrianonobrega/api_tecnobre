import { AppDataSource } from "../../database";
import { User } from "../../entities/user.entity";
import { Order } from "../../entities/userOrder.entity";


export const requestListService = async () => {
  const requestRepository = AppDataSource.getRepository(Order);

  const request = await requestRepository.find();

  console.log(request)

  const requestAll = request.map((req) => {
    const reqObj = {
        id: req.id,
        status: req.status,
        total_price: req.total_price,
        products: req.product,
        store:{
            // id: req.store.id,
            name: req.store.name,
            email: req.store.email,
            cnpj: req.store.cnpj,
        },
        user:{
            // id:req.user.id,
            name: req.user.name,
            email: req.user.email,
            cpf: req.user.cpf
        }
    }
    return reqObj
  })

  return requestAll
};