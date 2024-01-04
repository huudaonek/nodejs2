const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const songSchema = new Schema({
  name: { type: String, required: true },
  author: { type: String, required: true },
  size: { type: Number, required: true },
  views: { type: Number, default: 0 },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("song", songSchema);