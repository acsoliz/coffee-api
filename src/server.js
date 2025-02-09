import express from "express";
import { sequelize } from "../config/database.js";
import productRoutes from "./routes/product.routes.js";
import { errorHandler } from "./middlewares/error.handler.js";
import { loadDefaultProducts } from "./services/product.service.js";


export async function createServer() {
    const app = express();

    // Middleware to parse JSON
    app.use(express.json());

    // Routes
    app.use("/products", productRoutes);

    // Middleware to handle errors
    app.use(errorHandler);

    // Database sync before to export the server
    try {
        await sequelize.sync();
        console.log("Database synchronized");

        // Load default products if the table is empty
        await loadDefaultProducts();
    } catch (err) {
        console.error("Error al sincronizar la base de datos:", err);
        process.exit(1); // Exit the process with an error
    }

    return app;
}
