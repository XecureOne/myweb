const express = require("express");
const router = express.Router();
const { loginAdmin ,Addadmin} = require("../controllers/authController");

router.post("/login", loginAdmin);
// router.post("/register", Addadmin);

module.exports = router;
