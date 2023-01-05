import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connectDB from "./configs/db.js";

import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());

// Products route
app.use("/api/products", productRoutes);

// not found
app.use(notFound);

// Handle error
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started at port http://localhost:${port}`);
});
