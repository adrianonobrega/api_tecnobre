import { Router } from "express";
import { userCreateController } from "../controllers/user/user.controllers";
import { userListController } from "../controllers/user/user.controllers";
import { userAddressControllers } from "../controllers/user/userAddress.controllers";
import { userListOneController } from "../controllers/user/user.controllers";
import { userUpdateController } from "../controllers/user/user.controllers";
import { userDeleteController } from "../controllers/user/user.controllers";
import { userAdmin } from "../middleware/userAdmin";
import { authUser } from "../middleware/authUser";


export const userRoutes = Router()

userRoutes.post("/",userCreateController)
userRoutes.post("/address",userAddressControllers)
userRoutes.get("/",authUser,userAdmin,userListController)
userRoutes.patch("/:id",authUser,userUpdateController)
userRoutes.delete("/:id",authUser,userDeleteController)
userRoutes.get("/:id",authUser,userListOneController)