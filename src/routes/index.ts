import { Router } from "express";
import { userRoutes } from "./users";
import { storesRoutes } from "./stores";

export const router = Router()

router.use("/users",userRoutes)
router.use("/stores",storesRoutes)
