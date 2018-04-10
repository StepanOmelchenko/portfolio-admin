const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SkillsSchema = new Schema({
  _id: Schema.ObjectId,
  id: { type: String },
  type: {
    type: Number,
    default: 1
  },
  name: { type: String },
  percents: {
    type: Number,
    default: 0
  }
});

mongoose.model("skills", SkillsSchema);