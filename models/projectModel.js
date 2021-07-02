const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
});

const Project = mongoose.model("Project", userSchema);

module.exports = Project;
