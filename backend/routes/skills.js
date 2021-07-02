const router = require("express").Router();
let Skill = require("../models/skillModel");

router.route("/addSkill").post((req, res) => {
  const newSkill = new Skill({
    skillName: req.body.skillName,
    progress: req.body.progress,
  });

  newSkill
    .save()
    .then(() => res.json("Skill Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/getSkills").get((req, res) => {
  Skill.find((error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.json(data);
    }
  });
});
module.exports = router;
