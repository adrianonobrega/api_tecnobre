import { Router } from "express";
import { osCreateController } from "../controllers/os/os.controller";
import { osListController } from "../controllers/os/os.controller";

export const osRoutes = Router()

osRoutes.post("/:id",osCreateController)
osRoutes.get("/",osListController)
// productsRoutes.patch("/:id",productUpdateController)
// productsRoutes.delete("/:id",productDeleteController)
// productsRoutes.get("/:id",productListOneController)