const express = require("express");
const router = express.Router();
const {
  createEmployee,
  getEmployee,
} = require("../controllers/employeeController");

router.post("/", createEmployee);
router.post("/:id", getEmployee);

module.exports = router;
