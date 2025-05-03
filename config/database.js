const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize("employee_salary_db", "root", "", {
  host: process.env.DB_HOST,
  dialect: "mysql",
  // logging: false,
});

module.exports = sequelize;
