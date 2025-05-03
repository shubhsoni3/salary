const express = require("express");
const router = express.Router();
const { calculateSalary } = require("../controllers/salaryController");

router.post("/calculate", calculateSalary);

module.exports = router;
