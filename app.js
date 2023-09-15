//importing modules
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

//db connection
require("./config/db")();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cors config
app.use(
  cors({
    origin: "*", // allow to server to accept request from different origin -->  replace * with your origin
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], //allowing methods
  })
);

// require all Routes
app.use("/", require("./routes"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
