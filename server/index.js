import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import db from "./configs/db.js";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

// Products routes
app.use("/api/products", productRoutes);
// User routes
app.use("/api/users", userRoutes);
// Order routes
app.use("/api/orders", orderRoutes);

// not found
app.use(notFound);

// Handle error
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started at port http://localhost:${port}`);
});
