import { Router } from "express";
import { osCreateController } from "../controllers/os/os.controller";
import { osListController } from "../controllers/os/os.controller";
import { OsListOneController } from "../controllers/os/os.controller";
import { OsUpdateController } from "../controllers/os/os.controller";
import { osDeleteController } from "../controllers/os/os.controller";

export const osRoutes = Router()

osRoutes.post("/:id",osCreateController)
osRoutes.get("/",osListController)
osRoutes.patch("/:id",OsUpdateController)
osRoutes.delete("/:id",osDeleteController)
osRoutes.get("/:id",OsListOneController)