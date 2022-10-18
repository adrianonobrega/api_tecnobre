
import { ProductRequest } from "../../interfaces/product"
import { AppDataSource } from "../../database"
import { Product } from "../../entities/product.entity"
import { User } from "../../entities/user.entity"



export const createProductService = async ({ store_id, name, description, brand, category, image, price }: ProductRequest) => {
  const productRepository = AppDataSource.getRepository(Product)
  const userRepository = AppDataSource.getRepository(User)

  const store = await userRepository.findOne({
    where: {
      id: store_id
    }
  })

  if (!store) {
    throw new Error("Store not found")
  }

  const productAll = new Product();
  productAll.id = productAll.id
  productAll.name = name
  productAll.description = description
  productAll.brand = brand
  productAll.category = category
  productAll.image = image
  productAll.price = price
  productAll.user = store
  await productRepository.save(productAll)

  const result = {
    store: store.id,
    id: productAll.id,
    name: productAll.name,
    description: productAll.description,
    brand: productAll.brand,
    category: productAll.category,
    image: productAll.image,
    price: productAll.price,
  }

  return result
}