import { Router } from "express";
import { getUserOrders, orderCreate } from "../controllers/orderController.js";
import { checkAuth } from "../middlewares/checkAuth.js";

const orderRouter =  Router();

orderRouter.post("/create",checkAuth, orderCreate);
orderRouter.get("/getAll", checkAuth, getUserOrders);

export default orderRouter;