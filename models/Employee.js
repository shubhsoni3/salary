const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Employee = sequelize.define("Employee", {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, defaultValue: "employee" },
  basicSalary: { type: DataTypes.FLOAT, allowNull: false },
  hra: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  allowance: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  tax_deduction: { type: DataTypes.DECIMAL(10, 2), defaultValue: 0 },
  other_deductions: { type: DataTypes.DECIMAL(10, 2), defaultValue: 0 },
});
module.exports = Employee;
