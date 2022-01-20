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

    static async create(data) {
        // Promis 1: insert data
        const id = await new Promise((resolve, reject) => {
            // melakukan insert data
            const sql = "INSERT INTO students SET ?";
            db.query(sql, data, (err, result) => {
                resolve(result.insertId);
            });
        });

        // Promis 2: select data by id
        return new Promise((resolve, reject) => {
            // melakukan query
            const sql = `SELECT * FROM students WHERE id = ?`;
            db.query(sql, id, (err, result) => {
                resolve(result);
            });
        });
    }

    static find(id) {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM students WHERE id = ?";
            db.query(sql, id, (err, result) => {
                resolve(result[0]);
            });
        });
    }

    static async update(id, data) {
        await new Promise((resolve, reject) => {
            const sql = "UPDATE students SET ? WHERE id = ?";
            db.query(sql, [data, id], (err, result) => {
                resolve(result);
            });
        });

        const student = await this.find(id);
        return student;
    }

    static delete(id) {
        return new Promise((resolve, reject) => {
            const sql = "DELETE FROM students WHERE id = ?";
            db.query(sql, id, (err, result) => {
                resolve(result);
            });
        });
    }

}

// export class
module.exports = Student;