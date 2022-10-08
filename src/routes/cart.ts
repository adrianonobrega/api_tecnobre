import { Router } from "express";
import { cartCreateStoreController } from "../controllers/cart/cart.controller";
import { cartListOneController } from "../controllers/cart/cart.controller";
import { cartListController } from "../controllers/cart/cart.controller";
import { cartDeleteController } from "../controllers/cart/cart.controller";
import { cartUpdateController } from "../controllers/cart/cart.controller";
import { cartCreateUserController } from "../controllers/cart/cart.controller";

export const cartRoutes = Router()

cartRoutes.post("/stores/:id",cartCreateStoreController)
cartRoutes.post("/users/:id",cartCreateUserController)
cartRoutes.get("/:id",cartListOneController)
cartRoutes.get("/",cartListController)
cartRoutes.delete("/:id",cartDeleteController)
cartRoutes.patch("/:id",cartUpdateController)