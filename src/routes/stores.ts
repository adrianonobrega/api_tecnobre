import { Router } from "express";
import { storeCreateController } from "../controllers/store/store.controllers";

export const storesRoutes = Router()

storesRoutes.post("/",storeCreateController)
storesRoutes.get("/",)
storesRoutes.patch("/:id",)
storesRoutes.delete("/:id",)
storesRoutes.get("/:id",)