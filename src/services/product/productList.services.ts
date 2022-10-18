import { AppDataSource } from "../../database";
import { Product } from "../../entities/product.entity";

export const listProductServices =  async () => {
    const productRepository = AppDataSource.getRepository(Product)
    

    const product =   await productRepository.find()
    
   
    

    return product
}
