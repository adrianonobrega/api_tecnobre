import { Router } from "express";
import { cartCreateStoreController } from "../controllers/cart/index.controller";
import { cartListOneController } from "../controllers/cart/index.controller";
import { cartListController } from "../controllers/cart/index.controller";
import { cartDeleteController } from "../controllers/cart/index.controller";
import { cartUpdateController } from "../controllers/cart/index.controller";
import { cartCreateUserController } from "../controllers/cart/index.controller";

export const cartRoutes = Router()

cartRoutes.post("/stores/:id",cartCreateStoreController)
cartRoutes.post("/users/:id",cartCreateUserController)
cartRoutes.get("/:id",cartListOneController)
cartRoutes.get("/",cartListController)
cartRoutes.delete("/:id",cartDeleteController)
cartRoutes.patch("/:id",cartUpdateController)