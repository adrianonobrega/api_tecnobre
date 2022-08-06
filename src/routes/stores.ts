import { Router } from "express";
import { storeCreateController } from "../controllers/store/store.controllers";
import { storeListController } from "../controllers/store/store.controllers";

export const storesRoutes = Router()

storesRoutes.post("/",storeCreateController)
storesRoutes.get("/",storeListController)
storesRoutes.patch("/:id",)
storesRoutes.delete("/:id",)
storesRoutes.get("/:id",)