const moogoose = require("mongoose");

moogoose
   .connect(process.env.MONGO_DB)
   .then(() => {
      console.log("Connected to MongoDB");
   })
   .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
   });
