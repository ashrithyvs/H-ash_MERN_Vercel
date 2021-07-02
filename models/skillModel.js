const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  skillName: {
    type: String,
    required: true,
  },
  progress: {
    type: Number,
    required: true,
  },
});

const Skill = mongoose.model("Skill", userSchema);

module.exports = Skill;
