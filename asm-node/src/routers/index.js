import {Router} from "express";
import categoryRoutes from './CategoryRoutes.js';
import productRouter from "./ProductRoutes.js";
import authRouter from "./authRoutes.js";
import cartRouter from "./cartRoutes.js";

const router = Router();

router.use("/categories", categoryRoutes);
router.use("/products", productRouter);
router.use("/auth", authRouter);
router.use("/carts", cartRouter);

export default router;