const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const historySchema = new Schema({
  user: { type: String, required: true },
  route: { type: String, required: true },
  dir: { type: String, required: true }
});

const History = mongoose.model("History", historySchema);

module.exports = History;
