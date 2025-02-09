import {
    getAllProducts,
    createProduct
} from "../services/product.service.js";

export const getAllProductsController = async (req, res) => {
    try {
        const products = await getAllProducts();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: "Error getting products" });
    }
};

export const createProductController = async (req, res) => {
    try {
        const { name, description, price, imageUrl } = req.body;

        // Basic validation
        if (!name || !description || !price || !imageUrl) {
            return res.status(400).json({ error: "Required fields are missing. (name, description, price and imageUrl)" });
        }

        const newProduct = await createProduct({ name, description, price, imageUrl });
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(500).json({ error: "Error creating product" });
    }
};