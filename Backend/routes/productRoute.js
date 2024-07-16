import express from "express";
import { addProducts, getAllProducts, getSingleProduct, updateProduct ,deleteProduct} from "../controller/productController.js";
import { verifyToken } from "../middleware/verifyUser.js";

const route=express.Router();
route.get("/products",getAllProducts);
route.get("/product/:id",getSingleProduct);
route.post("/products",verifyToken,addProducts);
route.put("/product/:id",verifyToken,updateProduct);
route.delete("/product/:id",verifyToken,deleteProduct)
export default route;
