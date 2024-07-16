import express from "express"
import { addItemToCart, deleteProduct, getUserCart } from "../controller/cartControler.js";
import { verifyToken } from "../middleware/verifyUser.js";
const route=express.Router();
route.get("/cart",verifyToken,getUserCart);
route.post("/cart", verifyToken,addItemToCart);
route.delete("/cart/:id",deleteProduct);
export default route