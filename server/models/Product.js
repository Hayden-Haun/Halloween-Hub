const { Schema, model } = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const productSchema = new Schema({
  productID: {
    type: String,
    required: true,
  },

  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
  },
  productPrice: {
    type: Number,
    required: true,
  },
  productCategory: {
    type: String,
    required: true,
  },
  //   productQuantity: {
  //     type: Number,
  //     required: true,
  //   },
});

const Product = model("Product", productSchema);

module.exports = Product;
