import { AppDataSource } from "../../database";
import { Order } from "../../entities/userOrder.entity";

export const requestUserListOneService = async (id: string) => {
  const userRequestRepository = AppDataSource.getRepository(Order);

  const request = await userRequestRepository.findOne({
    where: {
      id:id
    }
  })

  if(!request){
    throw new Error("Invalid user")
  }

  return request;
};