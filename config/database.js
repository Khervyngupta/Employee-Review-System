const mongoose = require("mongoose");

// Here we connect the odm(object document map) mongoose to the dbms mongodb.
mongoose.connect("mongodb://127.0.0.1:27017/Employee-Review",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection; // db store the connection

// checking the connection
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Database connected successfully");
});

// exporting the connection.
module.exports = db;