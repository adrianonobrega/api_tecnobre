import { Router } from "express";
import { cartListOneController } from "../controllers/cart/cart.controller";
import { cartListController } from "../controllers/cart/cart.controller";
import { cartDeleteController } from "../controllers/cart/cart.controller";
import { cartUpdateController } from "../controllers/cart/cart.controller";
import { cartCreateUserController } from "../controllers/cart/cart.controller";
import { authUser } from "../middleware/authUser";
import { userAdmin } from "../middleware/userAdmin";

export const cartRoutes = Router()

cartRoutes.post("/users/:id",authUser,cartCreateUserController)
cartRoutes.get("/:id",authUser,cartListOneController)
cartRoutes.get("/",authUser,userAdmin,cartListController)
cartRoutes.delete("/:id",authUser,cartDeleteController)
cartRoutes.patch("/:id",authUser,userAdmin,cartUpdateController)