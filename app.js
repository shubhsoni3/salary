const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// const authRouters = require("../routes/authRoutes");
const authRouters = require("./routes/authRoutes");
// const employeeRoutes = require("../routes/employeeRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const payrollRoutes = require("./routes/payrollRoutes");
const salaryRoutes = require("./routes/salaryRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const sequelize = require("./config/database");
const authMiddleware = require("./middleware/authMiddleware");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/auth", authRouters);

// app.use("authMiddleware");

app.use("/employees", employeeRoutes);
app.use("/attendance", attendanceRoutes);
app.use("/salary", salaryRoutes);
app.use("/payroll", payrollRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => console.log("server running on port 3000"));
});
