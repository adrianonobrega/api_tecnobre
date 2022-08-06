import { Router } from "express";
import { storeCreateController } from "../controllers/store/store.controllers";
import { storeListController } from "../controllers/store/store.controllers";
import { storeUpdateController } from "../controllers/store/store.controllers";
import { storeDeleteController } from "../controllers/store/store.controllers";
import { storeListOneController } from "../controllers/store/store.controllers";

export const storesRoutes = Router()

storesRoutes.post("/",storeCreateController)
storesRoutes.get("/",storeListController)
storesRoutes.patch("/:id",storeUpdateController)
storesRoutes.delete("/:id",storeDeleteController)
storesRoutes.get("/:id",storeListOneController)