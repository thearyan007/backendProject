const express = require("express");
const router = express.Router();

const homecontroller = require("../controllers/home_controller");

router.get("/", homecontroller.home);

module.exports = router;
