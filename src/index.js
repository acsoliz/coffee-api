import {createServer} from "./server.js";

async function main() {
    const app = await createServer();
    const PORT = process.env.SERVER_PORT || 3000;

    app.listen(PORT, () => {
        console.log(`Running server on http://localhost:${PORT}`);
    });
}

main().catch((err) => {
    console.error("Error starting the server:", err);
});
