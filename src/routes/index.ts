import { Router } from "express";
import { userRoutes } from "./users";
import { storesRoutes } from "./stores";
import { productsRoutes } from "./products";
import { cartRoutes } from "./cart";

export const router = Router()

router.use("/users",userRoutes)
router.use("/stores",storesRoutes)
router.use("/products",productsRoutes)
router.use("/carts",cartRoutes)
