import {Router} from "express";
import categoryRoutes from './CategoryRoutes.js';

const router = Router();

router.use("/categories", categoryRoutes);

export default router;