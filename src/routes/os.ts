import { Router } from "express";
import { osCreateController } from "../controllers/os/os.controller";
import { osListController } from "../controllers/os/os.controller";
import { OsListOneController } from "../controllers/os/os.controller";
import { OsUpdateController } from "../controllers/os/os.controller";
import { osDeleteController } from "../controllers/os/os.controller";
import { authUser } from "../middleware/authUser";
import { userAdmin } from "../middleware/userAdmin";

export const osRoutes = Router()

osRoutes.post("/:id",authUser,userAdmin,osCreateController)
osRoutes.get("/",authUser,userAdmin,osListController)
osRoutes.patch("/:id",authUser,userAdmin,OsUpdateController)
osRoutes.delete("/:id",authUser,userAdmin,osDeleteController)
osRoutes.get("/:id",authUser,OsListOneController)