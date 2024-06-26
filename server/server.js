import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";
import { promises as fs } from "fs";
dotenv.config();

const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;
const collectionName = process.env.MONGO_DB_COLLECTION;
const ordersCollection = process.env.MONGO_DB_ORDERS;

const app = express();
app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());
const PORT = 3000;

//get all products
app.get("/products", async (req, res) => {
  try {
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const products = await collection.find({}).toArray();
    res.json(products);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Error fetching products");
  }
});

//get product by id
app.get("/products/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const product = await collection.find({ itemId: id }).toArray();
    res.json(product);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("No product found!");
  }
});

//get product by category
app.get("/products/category/:category", async (req, res) => {
  try {
    const { category } = req.params;
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    const products = await collection.find({ category: category }).toArray();
    res.json(products);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("No product found!");
  }
});

// POST order to db
app.post("/order", async (req, res) => {
  try {
    const order = req.body;
    console.log(order)
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(ordersCollection);
    const result = await collection.insertOne(order);
    console.log(result);
    res.status(201).send(`{"_id":"${result.insertedId}"}`);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send("Error adding order");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
