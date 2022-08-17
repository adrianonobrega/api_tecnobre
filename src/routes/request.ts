import { Router } from "express";
import { requestStoreCreateController } from "../controllers/requests/requests.controller";
import { requestUserCreateController } from "../controllers/requests/requests.controller";
import { requestUserListOneController } from "../controllers/requests/requests.controller";
import { requestListController } from "../controllers/requests/requests.controller";
import { requestDeleteController } from "../controllers/requests/requests.controller";
import { requestUpdateController } from "../controllers/requests/requests.controller";

export const requestRoutes = Router()

requestRoutes.post("/store",requestStoreCreateController)
requestRoutes.post("/user",requestUserCreateController)
requestRoutes.get("/user/:id",requestUserListOneController)
requestRoutes.get("/",requestListController)
requestRoutes.delete("/:id",requestDeleteController)
requestRoutes.patch("/:id",requestUpdateController)