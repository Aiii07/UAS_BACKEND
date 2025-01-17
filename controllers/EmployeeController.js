// Import Model Employee
const Employee = require("../models/Employee");

// Membuat class EmployeeController
class EmployeeController {
  async index(req, res) {
    const employees = await Employee.all();
    if (!employees || employees.length === 0) {
      return res.status(404).json({ message: "Data is empty", status: 200 });
    }
    res.json({ message: "Get All Resources", data: employees, status: 200 });
  }

  async store(req, res) {
    const { name, gender, phone, address, email, status, hired_on } = req.body;
    if (!name || !gender || !phone || !address || !email || !status || !hired_on) {
      return res.status(422).json({ message: "All fields must be filled", status: 422 });
    }
    const newEmployee = await Employee.create(req.body);
    return res.status(201).json({ message: "Resource added", data: newEmployee, status: 201 });
  }

  async update(req, res) {
    const { id } = req.params;
    const employee = await Employee.find(id);
    if (!employee) {
      return res.status(404).json({ message: "Resource not found", status: 404 });
    }
    const updatedEmployee = await Employee.update(id, req.body);
    return res.status(200).json({ message: "Resource updated", data: updatedEmployee, status: 200 });
  }

  async destroy(req, res) {
    const { id } = req.params;
    const employee = await Employee.find(id);
    if (!employee) {
      return res.status(404).json({ message: "Resource not found", status: 404 });
    }
    await Employee.delete(id);
    return res.status(200).json({ message: "Resource deleted", status: 200 });
  }

  async show(req, res) {
    const { id } = req.params;
    const employee = await Employee.find(id);
    if (!employee) {
      return res.status(404).json({ message: "Resource not found", status: 404 });
    }
    return res.status(200).json({ message: "Get Detail Resource", data: employee, status: 200 });
  }

  async search(req, res) {
    const { name } = req.params;
    const employees = await Employee.search(name);
    if (!employees || employees.length === 0) {
      return res.status(404).json({ message: "Resource not found", status: 404 });
    }
    return res.status(200).json({ message: "Get Searched Resource", data: employees, status: 200 });
  }

  async active(req, res) {
    const employees = await Employee.findByStatus("active");
    if (!employees || employees.length === 0) {
      return res.status(404).json({ message: "No active employees", status: 404 });
    }
    return res.status(200).json({ message: "Get Active Employees", data: employees, status: 200 });
  }

  async inactive(req, res) {
    const employees = await Employee.findByStatus("inactive");
    if (!employees || employees.length === 0) {
      return res.status(404).json({ message: "No inactive employees", status: 404 });
    }
    return res.status(200).json({ message: "Get Inactive Employees", data: employees, status: 200 });
  }

  async terminated(req, res) {
    const employees = await Employee.findByStatus("terminated");
    if (!employees || employees.length === 0) {
      return res.status(404).json({ message: "No terminated employees", status: 404 });
    }
    return res.status(200).json({ message: "Get Terminated Employees", data: employees, status: 200 });
  }
}

// Export instance
module.exports = new EmployeeController();
