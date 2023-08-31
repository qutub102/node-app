const mongoose = require("mongoose");

module.exports.db = function main() {
  mongoose
    .connect(
      "mongodb+srv://rahulsahuhahaha:LBQKYID75tgcq0un@cluster0.v0tt2ej.mongodb.net/?retryWrites=true&w=majority",
      // "mongodb://0.0.0.0:27017/Test",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("mongodb connected");
    })
    .catch((err) => {
      console.log("Something went wrong!!", err);
    });
};
