const express = require("express");
const router = express.Router();
const { distributePayroll } = require("../controllers/payrollController");

router.post("/distribute", distributePayroll);

module.exports = router;
