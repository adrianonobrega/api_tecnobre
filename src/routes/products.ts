import { Router } from "express";
import { productCreateController, productListController,productListOneController,productDeleteController,productUpdateController } from "../controllers/product/product.controller";
import { userAdminOrStore } from "../middleware/userAdminOrStore";
import { authUser } from "../middleware/authUser";


export const productsRoutes = Router()

productsRoutes.post("/:id",authUser,userAdminOrStore,productCreateController)
productsRoutes.get("/",productListController)
productsRoutes.patch("/:id",authUser,userAdminOrStore,productUpdateController)
productsRoutes.delete("/:id",authUser,userAdminOrStore,productDeleteController)
productsRoutes.get("/:id",productListOneController)