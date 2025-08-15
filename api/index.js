const express = require("express");
const app = express();
const cors = require("cors");
require("./config");
const User = require("./User");
const Product = require("./Product");
const path = require("path");
const multer = require("multer");

app.use(cors());
app.use(express.json());

// upload file
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, "uploads");
   },
   filename: function (req, file, cb) {
      cb(null, Date.now() + "_" + file.originalname);
   },
});
const upload = multer({ storage: storage });

app.post("/upload", upload.single("image"), async (req, res) => {
   const data = new Product({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      subcategory: req.body.subcategory,
      image: req.file
         ? `http://localhost:4500/uploads/${req.file.filename}`
         : null,
   });
   const result = await data.save();
   res.send(result);
});

app.post("/register", async (req, res) => {
   let user = await User(req.body);
   let data = await user.save();
   res.send(data);
});
app.get("/users", async (req, res) => {
   let data = await User.find();
   res.send(data);
});
app.get("/users/:id", async (req, res) => {
   const userId = req.params.id;
   const data = await User.findById(userId);
   res.send(data);
});
app.delete("/deleteuser/:id", async (req, res) => {
   let data = await User.findByIdAndDelete(req.params.id);
   res.send(data);
});

app.post("/product", async (req, res) => {
   let product = await Product(req.body);
   let data = await product.save();
   res.send(data);
});
app.get("/fetch", async (req, res) => {
   let data = await Product.find().sort({ createdAt: -1 });
   res.send(data);
});
app.get("/fetch/:id", async (req, res) => {
   const productId = req.params.id;
   const data = await Product.findById(productId);
   res.send(data);
});
app.get("/fetch/category/:category", async (req, res) => {
   const category = req.params.category;
   const data = await Product.find({ category: category });
   res.send(data);
});
app.get(
   "/fetch/category/:category/subcategory/:subcategory",
   async (req, res) => {
      const { category, subcategory } = req.params.category;
      const data = await Product.find({ category, subcategory });
      res.send(data);
   }
);
app.delete("/delete/:id", async (req, res) => {
   let data = await Product.findByIdAndDelete(req.params.id);
   res.send(data);
});

app.put("/update/:id", async (req, res) => {
   const data = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
   });
   res.send(data);
});
app.get("/search/key/:keyword", async (req, res) => {
   const keyword = req.params.keyword;
   const data = await Product.find({
      $or: [
         { title: { $regex: keyword, $options: "i" } },
         { description: { $regex: keyword, $options: "i" } },
         { category: { $regex: keyword, $options: "i" } },
         { subcategory: { $regex: keyword, $options: "i" } },
      ],
   });
   res.send(data);
});
app.listen(4500);
