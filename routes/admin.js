const router = require("express").Router();
let Admin = require("../models/adminModel");

router.route("/getAdminInfo").get((req, res) => {
  Admin.find((error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.json(data);
    }
  });
});
module.exports = router;
