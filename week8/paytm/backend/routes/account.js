const express = require("express");
const router = express.Router();
const {authMiddleware} = require("../middleware");
const {getBalance, transfer} = require("../controller/account");

router.get("/balance",authMiddleware,getBalance);
router.post("/transfer",authMiddleware,transfer);   

module.exports = router;