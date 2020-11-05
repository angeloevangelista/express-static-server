import path from "path";
import express from "express";

const PORT = process.env.PORT || 3000;
const staticRoute = "/static";

const server = express();

server.listen(PORT, () => {
    console.clear();
    console.log(`Your server is running at http://127.0.0.1:${PORT} 🚀`);
    console.log(`Access "${staticRoute}" to get the static files on server`);
});

server.use(staticRoute, express.static(path.resolve(__dirname, "static")));

server.get("/", (request, response) =>
    response.json({
        message: `Your static files are available at ${staticRoute}`,
    })
);
