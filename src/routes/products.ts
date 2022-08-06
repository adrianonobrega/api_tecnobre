import { Router } from "express";
import { productCreateController, productListController,productListOneController,productDeleteController,productUpdateController } from "../controllers/product/product.controller";



export const productsRoutes = Router()

productsRoutes.post("/",productCreateController)
productsRoutes.get("/",productListController)
productsRoutes.patch("/:id",productUpdateController)
productsRoutes.delete("/:id",productDeleteController)
productsRoutes.get("/:id",productListOneController)