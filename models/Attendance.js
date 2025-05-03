const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Employee = require("./Employee");

const Attendance = sequelize.define("Attendance", {
  hours_worked: { type: DataTypes.INTEGER, allowNull: false },
  status: {
    type: DataTypes.ENUM("full_day", "half_day", "absent"),
    allowNull: false,
  },
});
Attendance.belongsTo(Employee);

module.exports = Attendance;
