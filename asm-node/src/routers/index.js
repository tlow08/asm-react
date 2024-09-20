import {Router} from "express";
import categoryRoutes from './CategoryRoutes.js';
import productRouter from "./ProductRoutes.js";

const router = Router();

router.use("/categories", categoryRoutes);
router.use("/products", productRouter);
export default router;