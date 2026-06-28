const express = require("express");
const router = express.Router();
const {authMiddleware} = require("../middleware");
const {signup,signin,userData}  = require("../controller/user");


router.post("/signup",signup);
router.post("/signin",signin);
router.get("/userData",authMiddleware,userData);
module.exports = router;