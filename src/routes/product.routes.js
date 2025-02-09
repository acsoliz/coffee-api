import express from "express";
import { getAllProductsController, createProductController } from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getAllProductsController);
router.post("/", createProductController);

export default router;