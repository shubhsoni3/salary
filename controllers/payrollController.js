const Payroll = require("../models/Payroll");
const Salary = require("../models/Salary");

exports.distributePayroll = async (req, res) => {
  const { salaryId, paidAmount, payouDate } = req.body;
  try {
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

exports.logout = (req, res) => {
  res.clearCookie("token").send("Logged Out successfully");
};
