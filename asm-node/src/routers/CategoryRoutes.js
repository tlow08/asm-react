import { Router } from "express";
import { createCategory, getAllCategories, getCategoryById, removeCategoryById, updateCategoryById } from "../controllers/categoryController.js";

const categoryRoutes = Router();

categoryRoutes.get("/", getAllCategories);
categoryRoutes.get("/:id", getCategoryById);

categoryRoutes.post("/", createCategory);
categoryRoutes.patch("/:id", updateCategoryById);
categoryRoutes.delete("/:id", removeCategoryById);

export default categoryRoutes;