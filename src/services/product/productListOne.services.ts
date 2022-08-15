import { AppDataSource } from "../../database"
import { Product } from "../../entities/product.entity"




const productListOneServices = async (id: string) => {
  const productRepository = AppDataSource.getRepository(Product)

  const product = await productRepository.findOne({
    where: {
      id: id
    }
  })

  if (!product) {
    throw new Error("Store not found")
  }

  return product
}

export default productListOneServices