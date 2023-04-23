const express = require("express");
const router = express.Router();

const homecontroller = require("../controllers/home_controller");

router.get("/", homecontroller.home);
router.use("/user", require("./user"));
// router.use("/post", require("./post"));

module.exports = router;
