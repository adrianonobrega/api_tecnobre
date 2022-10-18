import { Router } from "express";
import { userRoutes } from "./users";
import { productsRoutes } from "./products";
import { cartRoutes } from "./cart";
import { osRoutes } from "./os";
import { loginController } from "../controllers/login/login.controller";

export const router = Router()

router.use("/users",userRoutes)
router.use("/products",productsRoutes)
router.use("/carts",cartRoutes)
router.use("/os",osRoutes)
router.use("/login",loginController)