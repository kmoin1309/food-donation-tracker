const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

const dbUser = process.env.MONGODB_USER;
const dbPassword = process.env.MONGODB_PASSWORD;

mongoose
  .connect(
    process.env.DATABASE_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Connected to MongoDB database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.json());

app.use("/api", require("./routes/route"));

app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
