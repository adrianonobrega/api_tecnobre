import { Router } from "express";
import { userRoutes } from "./users";
import { storesRoutes } from "./stores";
import { productsRoutes } from "./products";

export const router = Router()

router.use("/users",userRoutes)
router.use("/stores",storesRoutes)
router.use("/products",productsRoutes)
