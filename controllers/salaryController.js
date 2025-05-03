const Attendance = require("../models/Attendance");
const Employee = require("../models/Employee");
const Salary = require("../models/Salary");

const calculateSalary = async (req, res) => {
  const { employeeId, Month } = req.body;

  try {
    const employee = await Employee.findByPk(employeeId);
    if (!employee)
      return res.status(404).json({ message: "Employee not found" });

    const attendanceRecords = await Attendance.findAll({
      where: {
        employee_id: employeeId,
        date: { $like: `${month}%` },
      },
    });

    let fullDayCount = 0;
    let halfDayCount = 0;
    attendanceRecords.forEach((record) => {
      if (record.status === "full_day") fullDayCount++;
      if (record.status === "half_day") halfDayCount++;
    });

    const dailyWage =
      (employee.basic_salary + employee.hra + employee.allowances) / 30;
    const fullDaySalary = dailyWage;
    const halfDaySalary = dailyWage / 2;

    const totalSalary =
      fullDayCount * fullDaySalary + halfDayCount * halfDaySalary;
    const pfDeduction = employee.basic_salary * 0.12;
    const netSalary =
      totalSalary -
      pfDeduction -
      employee.tax_deduction -
      employee.other_deductions;

    await Payroll.create({
      employee_id: employeeId,
      month,
      gross_salary: employee.basic_salary + employee.hra + allowances,
      tax: employee.tak_deduction,
      pf: pfDeduction,
      total_deductions:
        pfDeduction + employee.tax_deduction + employee.other_deductions,
      netSalary,
    });
    res.status(200).json({ netSalary });
  } catch (error) {
    res.status(500).json({ message: "Error calcutating salary" });
  }
};

module.exports = { calculateSalary };
