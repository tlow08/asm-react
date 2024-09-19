import { Router } from "express";
import { createCategory, getAllCategories } from "../controllers/categoryController.js";

const categoryRoutes = Router();

categoryRoutes.get("/", getAllCategories);

categoryRoutes.post("/", createCategory);
export default categoryRoutes;