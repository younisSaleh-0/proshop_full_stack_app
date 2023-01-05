import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import products from "./data/products.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

// All our Product
app.get("/api/products", (req, res) => {
  res.json(products);
});

// Single product
app.get("/api/products/:id", (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});

app.listen(port, () => {
  console.log(`Server started at port http://localhost:${port}`);
});
