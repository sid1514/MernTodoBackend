const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./sec.env" });
const db = process.env.dbs;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to database"))
  .catch((e) => console.log(e));
