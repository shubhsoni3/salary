const Employee = require("../models/Employee");

const createEmployee = async (req, res) => {
  const { email, password } = req.body;
  try {
    const {
      name,
      email,
      password,
      role,
      basicSalary,
      hra,
      allowance,
      deducations,
    } = req.body;
    const employee = await Employee.create({
      name,
      email,
      password,
      role,
      basicSalary,
      hra,
      allowance,
      deducations,
    });
    res.status(201).json(employee);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const getEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await Employee.findByPk(id);
    if (!employee) return res.status(404).send("Employee not Found");
    res.json(employee);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

module.exports = { createEmployee, getEmployee };
