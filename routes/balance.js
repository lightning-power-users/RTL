const BalanceController = require("../controllers/balance");
const express = require("express");
const router = express.Router();
const authCheck = require("./authCheck");

router.get("/:source", authCheck, BalanceController.getBalance);

module.exports = router;
