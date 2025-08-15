const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
   {
      title: String,
      description: String,
      price: Number,
      category: String,
      subcategory: String,
      image: String,
   },
   {
      timestamps: true,
   }
);

module.exports = mongoose.model("products", productSchema);
