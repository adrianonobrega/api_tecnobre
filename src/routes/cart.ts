import { Router } from "express";
import { cartCreateController } from "../controllers/cart/index.controller";
import { cartListOneController } from "../controllers/cart/index.controller";
import { cartListController } from "../controllers/cart/index.controller";
import { cartDeleteController } from "../controllers/cart/index.controller";
import { cartUpdateController } from "../controllers/cart/index.controller";

export const cartRoutes = Router()

cartRoutes.post("/:id",cartCreateController)
cartRoutes.get("/:id",cartListOneController)
cartRoutes.get("/",cartListController)
cartRoutes.delete("/:id",cartDeleteController)
cartRoutes.patch("/:id",cartUpdateController)