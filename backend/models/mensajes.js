const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  latitud: { type: String, required: true },
  longitud: { type: String, required: true },
  room: { type: String, required: true },
});

module.exports = mongoose.model("Message", messageSchema);
