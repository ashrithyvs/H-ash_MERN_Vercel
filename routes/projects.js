const router = require("express").Router();
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
let path = require("path");
let Project = require("../models/projectModel");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });
router.route("/add").post(upload.single("photo"), (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const link = req.body.link;
  const photo = req.file.filename;

  const newProjectData = {
    title,
    description,
    link,
    photo,
  };

  const newProject = new Project(newProjectData);

  newProject
    .save()
    .then(() => res.json("Project Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/").get((req, res) => {
  Project.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
      console.log("Project data recieved");
    }
  });
});

module.exports = router;
