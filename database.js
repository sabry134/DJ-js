const mongoose = require("mongoose");
const config = require("./config");

mongoose.connect("mongodb+srv://Sabry:lrylaCFxEorlVMWh@cluster0.z0cs5tg.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("[✅ DataBase] Connected!");
});
module.exports = mongoose;
