const express = require("express");
const router = express.Router();
const signUpController = require("../controllers/signUpController");

router
  .route("/")
  .post(signUpController.createNewSignupUser)

module.exports = router;
