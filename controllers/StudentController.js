// import model
const Student = require("../models/Student");

// buat Class Student Controller
class StudentController {
    async index(req, res) {
        const students = await Student.all();

        if (students[0]) {
            const data = {
                message: "Menampilkan semua students",
                data: students,
            };
            
            res.status(200).json(data);
        }
        else {
            const data = {
                message: "Student not found",
            };
            
            res.status(404).json(data);
        }
    }

    async store(req, res) {
        const student = await Student.create(req.body);
        
        const { nama } = req.body;

        const data = {
            message: "Menambahkan data student " + nama,
            data: student,
        };

        res.status(200).json(data);
    }

    async update(req, res) {
        const { id } = req.params;
        const student = await Student.find(id);
        
        console.log(student[0]);


        if (student[0]) {
            const student = await Student.update(id, req.body);
            const data = {
                message: "Mengedit data student", 
                data: student,
            };
            res.status(200).json(data)
        }
        else {
            const data = {
                message: "Student not found",
            };

            res.status(404).json(data);
        }
    }

    async destroy(req, res) {
        const { id } = req.params;
        const student = await Student.find(id);

        if (student[0]) {
            await Student.delete(id);
            const data = {
                message: "Menghapus data student",
            };

            res.status(200).json(data);
        }
        else {
            const data = {
                message: "Student not found",
            };

            res.status(404).json(data);        
        }
    }

    async show(req, res) {
        const { id } = req.params;
        const student = await Student.find(id);

        if (student[0]) {
            const data = {
                message: "Menampilkan detail students",
                data: student,
            };

            res.status(200).json(data);
        }
        else {
            const data = {
                message: "Student not found",
            };

            res.status(404).json(data);
        }
    }
}

// buat object
const object = new StudentController();

// export
module.exports = object;
