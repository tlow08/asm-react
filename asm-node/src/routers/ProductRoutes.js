import {Router} from "express";
import { createProduct, getAllProducts, getProductById, removeProductById, updateProductById } from './../controllers/productController.js';

const productRouter = Router();

productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProductById);

productRouter.post("/", createProduct);
productRouter.patch("/:id", updateProductById);
productRouter.delete("/:id", removeProductById);
export default productRouter;