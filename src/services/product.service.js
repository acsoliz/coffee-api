import { defaultProducts } from "../data/defaultProducts.js";
import { Product } from "../models/Product.js";

export async function getAllProducts() {
    return await Product.findAll({
        attributes: ["id", "name", "description", "price", "imageUrl"]
    });
};

export async function createProduct(productData) {
    return await Product.create(productData);
};

export async function loadDefaultProducts() {
    const count = await Product.count();
    if (count === 0) {
        await Product.bulkCreate(defaultProducts);
        console.log("Default data loaded into the database");
    }
}