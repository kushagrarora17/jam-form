var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/test", { useNewUrlParser: true });

var conn = mongoose.connection;

conn.on("connected", function () {
  console.log("database is connected successfully");
});

conn.on("error", console.error.bind(console, "connection error:"));

module.exports = conn;
