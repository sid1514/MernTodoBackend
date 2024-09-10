const express = require("express");
const route = require("./routes/route");
const cors = require("cors");
const server = express();
const dotenv = require("dotenv");
dotenv.config({ path: "./sec.env" });

const port = process.env.port;
server.use(express.json());
server.use(cors());
server.use(route);

server.listen(port, () => {
  console.log("server on");
});
