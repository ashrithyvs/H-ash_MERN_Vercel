const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB success");
});

const projectRouter = require("./routes/projects");
const userRouter = require("./routes/skills");
const adminRouter = require("./routes/admin");
app.use("/projects", projectRouter);
app.use("/skills", userRouter);
app.use("/admin", adminRouter);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
