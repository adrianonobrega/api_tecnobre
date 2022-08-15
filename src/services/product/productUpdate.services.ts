import { ProductUpdate } from "../../interfaces/product"
import { AppDataSource } from "../../database"
import { Product } from "../../entities/product.entity"


const productUpdateService = async ({ id, name, description, brand, category, image, price}: ProductUpdate) => {
  const productRepository = AppDataSource.getRepository(Product)

  const products = new Product();

  products.id = products.id
  products.name = name ? name : products.name
  products.description = description ? description : products.description
  products.brand = brand ? brand : products.brand
  products.image = image ? image : products.image
  products.price = price ? price : products.price
  products.category = category ? category : products.category

  await productRepository.createQueryBuilder().update(products).set(products).where("id = :id", { id: id }).execute()

  

  return products
}

export default productUpdateService