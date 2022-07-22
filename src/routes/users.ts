import { Router } from "express";
import { userCreateController } from "../controllers/user/userCreate.controllers";
import { userListController } from "../controllers/user/userCreate.controllers";

export const userRoutes = Router()

userRoutes.post("/",userCreateController)
userRoutes.get("/",userListController)