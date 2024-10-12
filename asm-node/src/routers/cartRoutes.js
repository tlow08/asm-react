import { Router } from "express";
import {
  addToCart,
  getCart,
  removeFromCart,
  updateCartProduct,
} from "./../controllers/cartController.js";
import { checkAuth } from "../middlewares/checkAuth.js";

const cartRouter = Router();

cartRouter.post("/", checkAuth, addToCart); 
cartRouter.get('/', checkAuth, getCart); 
cartRouter.post('/update', checkAuth, updateCartProduct); 
cartRouter.post('/remove', checkAuth, removeFromCart); 
export default cartRouter;
