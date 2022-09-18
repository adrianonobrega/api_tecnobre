
import { ProductRequest } from "../../interfaces/product"
import { AppDataSource } from "../../database"
import { Product } from "../../entities/product.entity"
import { Store } from "../../entities/store.entity"



export const createProductService = async ({ store_id, name, description, brand, category, image, price }: ProductRequest) => {
  const productRepository = AppDataSource.getRepository(Product)
  const storeRepository = AppDataSource.getRepository(Store)

  const store = await storeRepository.findOne({
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
  productAll.store = store
  
  
  
  productRepository.create(productAll)
  await productRepository.save(productAll)

  const result = {
    store: store.id,
    id: productAll.id,
    name: productAll.name,
    description: productAll.description,
    brand: productAll.brand,
    category: productAll.category,
    image: productAll.image,
    price: productAll.image,
  }

  return result
}