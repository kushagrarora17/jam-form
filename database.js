var mongoose = require("mongoose");

const { MONGODB_CONNECTION_STRING } = process.env;

mongoose.connect(MONGODB_CONNECTION_STRING, { useNewUrlParser: true });

var conn = mongoose.connection;

conn.on("connected", function () {
  console.log("database is connected successfully");
});

conn.on("error", console.error.bind(console, "connection error:"));

module.exports = conn;
