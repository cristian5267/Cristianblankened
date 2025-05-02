import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { customMiddleware } from "./middlewares/customMiddleware.js";
import productsRouter from "./routes/products.routes.js";

const app = express();

app.use(bodyParser.json());
app.use(morgan());

app.use("/products", productsRouter);

app.get("/", [customMiddleware], (req, res) => {
    console.log(req.headers.myTime);
    return res.json({
        message: "Hola mundo",
    });
});

app.listen(8000, () => {
    console.log("Listening on port 8000");
});
