const { Schema } = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const productSchema = new Schema({
  productId: {
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
    required: true,
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

module.exports = productSchema;
