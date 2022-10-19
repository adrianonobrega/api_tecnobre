import { AppDataSource } from "../../database"
import { Product } from "../../entities/product.entity"




export const productListOneServices = async (id: string) => {
  const productRepository = AppDataSource.getRepository(Product)

  const product = await productRepository.findOne({
    where: {
      id: id
    }
  })

  if (!product) {
    throw new Error("Product not found")
  }

  return product
}

