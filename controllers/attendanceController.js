const Attendance = require("../models/Attendance");

exports.markAttendance = async (req, res) => {
  const { email, password } = req.body;
  try {
  } catch (err) {
    res.status(500).send("Server Error");
  }
};
