import { Router } from "express";
import { getAllCategories } from "../controllers/categoryController.js";

const categoryRoutes = Router();

categoryRoutes.get("/", getAllCategories);

export default categoryRoutes;