import { ProductUpdate } from "../../interfaces/product"
import { AppDataSource } from "../../database"
import { Product } from "../../entities/product.entity"


export const productUpdateService = async ({ id, name, description, brand, category, image, price}: ProductUpdate) => {
  const productRepository = AppDataSource.getRepository(Product)

  const findProduct = await productRepository.findOne({
    where:{
        id:id
    }
})

if(!findProduct){
    throw new Error("Product not found")
}

  const products = new Product();

  products.id = findProduct.id
  products.name = name || findProduct.name
  products.description = description || findProduct.description
  products.brand =  brand || findProduct.brand
  products.image =  image || findProduct.image
  products.price =  price || findProduct.price
  products.category =  category || findProduct.category

  await productRepository.createQueryBuilder().update(products).set(products).where("id = :id", { id: id }).execute()

  return products
}
