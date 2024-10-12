import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  removeProductById,
  updateProductById,
} from "./../controllers/productController.js";
import { checkAuth } from "../middlewares/checkAuth.js";
// import { checkAdmin } from "../middlewares/checkAdmin.js";

const productRouter = Router();

productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProductById);

productRouter.post("/", checkAuth, createProduct);
productRouter.patch("/:id", checkAuth, updateProductById);
productRouter.delete("/:id", checkAuth, removeProductById);
export default productRouter;
