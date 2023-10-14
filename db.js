const mongoose = require("mongoose");

const mongoUrl =
  "mongodb+srv://username:password@mongodb-demo.4ecdwb9.mongodb.net/SGP-rooms";

mongoose.connect(mongoUrl, { useUnifiedTopology: true, useNewUrlParser: true });
var connection = mongoose.connection;

connection.on("error", () => {
  console.log("MongoDb Connection failed");
});

connection.on("connected", () => {
  console.log("MongoDb Connection Successful");
});

module.exports = mongoose;
