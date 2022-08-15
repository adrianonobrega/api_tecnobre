import { AppDataSource } from "../../database"
import { Product } from "../../entities/product.entity"




const productDeleteServices = async (id: string) => {
  const productRepository = AppDataSource.getRepository(Product)


  const product = await productRepository.findOne({
    where: {
      id: id
    }
  })


  if (!product) {
    throw new Error("Store not found")
  }


  await productRepository.delete(id)


}

export default productDeleteServices