const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Employee = require("./Employee");

const Payroll = sequelize.define("Payroll", {
  gross_salary: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  tax: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  pf: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  total_deductions: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  net_salary: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  month: { type: DataTypes.STRING(7), allowNull: false },
});
Payroll.belongsTo(Employee);

module.exports = Payroll;
