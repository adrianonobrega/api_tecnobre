import { Router } from "express";
import { userRoutes } from "./users";

export const router = Router()

router.use("/users",userRoutes)