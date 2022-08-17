import { AppDataSource } from "../../database";
import { Order } from "../../entities/userOrder.entity";
import { RequestUpdate } from "../../interfaces/request";

 const requestUpdateService = async ({id,status}:RequestUpdate) => {
  const requestRepository = AppDataSource.getRepository(Order);

  const request = await requestRepository.find();

  if (!request) {
    throw new Error("Request not found");
  }

  const ordered = request.find((req) => req.id === id);

  const newStatus = { ...ordered, status: status };

  await requestRepository.save(newStatus);

  return newStatus;
};

export default requestUpdateService