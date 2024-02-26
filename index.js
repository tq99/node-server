const express = require("express");
require("dotenv").config();
const cors = require("cors");
const router = require("./router/router"); // Ensure this path is correct
const server = express();

server.use(cors());
server.use(express.json());
server.use("/", router);

const port = process.env.PORT || 4000; // Corrected port assignment

require("./database/connection"); // Ensure this path is correct and that it connects to the database

server.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
