const express = require("express");

const Product = require("../modals/productModal");

const Router = express.Router();

// GET public 'get all products'
Router.get("/", async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (err) {
        console.log(err.message, "from /api/products");
        res.status(500).json({msg: "server error"});
    }
});

// GET public 'get a product by id'
Router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        res.json(product);
    } catch (err) {
        console.log(err.message, "from /api/products/:id");
        res.status(404).json({msg: "product not found"});
    }
});

module.exports = Router;
