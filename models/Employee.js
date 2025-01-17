// Import database
const db = require("../config/database");

// Membuat class Employee
class Employee {

  // Mengambil semua data karyawan
  static all() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM employees";
      db.query(sql, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  // Menambahkan data karyawan baru
  static async create(data) {
    const id = await new Promise((resolve, reject) => {
      const sql = "INSERT INTO employees SET ?";
      db.query(sql, data, (err, results) => {
        if (err) reject(err);
        resolve(results.insertId);
      });
    });
    const employee = await this.find(id);
    return employee;
  }

  // Memperbarui data karyawan berdasarkan ID
  static async update(id, data) {
    await new Promise((resolve, reject) => {
      const sql = "UPDATE employees SET ? WHERE id = ?";
      db.query(sql, [data, id], (err) => {
        if (err) reject(err);
      });
    });
    const employee = await this.find(id);
    return employee;
  }

  // Menghapus data karyawan berdasarkan ID
  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM employees WHERE id = ?";
      db.query(sql, id, (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  }

  // Mencari karyawan berdasarkan ID
  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM employees WHERE id = ?";
      db.query(sql, id, (err, results) => {
        if (err) reject(err);
        const [employee] = results;
        resolve(employee);
      });
    });
  }

  // Mencari karyawan berdasarkan nama
  static search(name) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM employees WHERE name LIKE ?";
      db.query(sql, [`%${name}%`], (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }

  // Mencari karyawan berdasarkan status
  static findByStatus(status) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM employees WHERE status = ?";
      db.query(sql, status, (err, results) => {
        if (err) reject(err);
        resolve(results);
      });
    });
  }
}

// Export class Employee
module.exports = Employee;
