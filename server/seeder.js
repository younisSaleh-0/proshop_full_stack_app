import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import db from "./configs/db.js";

dotenv.config();

// Import data
const importData = async () => {
  try {
    // Clear all the model complete
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    // put the users to our user model
    const createUsers = await User.insertMany(users);

    // make the first one the admin
    const adminUser = createUsers[0]._id;

    // get the products and set the first user as the admin 
    const sampleProduct = products.map((product) => {
      return {
        ...product,
        user: adminUser,
      };
    });

    // Insert in Product
    await Product.insertMany(sampleProduct);

    console.log("Data imported!");

    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

// Destroy data
const destroyData = async () => {
  try {
    // Clear all the model complete
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!");

    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

//
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
