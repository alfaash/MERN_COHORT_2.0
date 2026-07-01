const express = require("express");
const router = express.Router();
const {authMiddleware} = require("../middleware");
const {signup,signin,userUpdate,userBulk}  = require("../controller/user");


router.post("/signup",signup);
router.post("/signin",signin);
router.put("/userUpdate",authMiddleware,userUpdate);
router.get("/bulk",authMiddleware,userBulk);
module.exports = router;