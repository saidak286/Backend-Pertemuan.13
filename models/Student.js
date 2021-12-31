// import db
const db = require("../config/database");

// class Model Student
class Student {
    // moethod untuk query semua data
    static all() {
        return new Promise(function(resolve, reject) {
            // query ke db
            const sql = "SELECT * FROM students";
            db.query(sql, function(err, result) {
                resolve(result);
            });
        });
    }

    static show(id) {
        return new Promise((resolve, reject) => {
            // melakukan query
            const sql = `SELECT * FROM students WHERE id = ${id}`;
            db.query(sql, (error, results) => {
                resolve(results);
            });
        });
    }

    static create(data) {
        return new Promise((resolve, reject) => {
            // melakukan insert data
            const sql = `INSERT INTO students SET ?`;
            db.query(sql, data, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(this.show(results.insertId));
                }
            });
        });
    }
}

// export class
module.exports = Student;