const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Employee = require("../models/Employee");

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const employee = await Employee.findOne({ where: { email } });
    if (!employee) return res.status(400).send("User Not Found");

    const isMatch = await bcrypt.compare(password, employee.password);
    if (!isMatch) return res.status(400).send("invalid Password");

    const token = jwt.sign({ id: employee.id, role: employee.role }, "1234", {
      expiresIn: "1h",
    });
    res
      .cookie("token", token, { httpOnly: true, secure: false })
      .send("login Succsefull");
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

exports.logout = (req, res) => {
  res.clearCookie("token").send("Logged Out successfully");
};
