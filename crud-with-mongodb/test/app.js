const express = require("express");
const blogRouter = require("../routes/BlogRouters");
const app = express();

//middleware
app.use(express.json());
app.use("/api/blogs", blogRouter);

app.listen(3001, () => {
  console.log("server is runing on port 3001");
});

const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/CRUD", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });
module.exports = app;
