// import model
const Student = require("../models/Student");

// buat Class Student Controller
class StudenController {
    async index(req, res) {
        const students = await Student.all();

        const data = {
            message: "Menampilkan semua students",
            data: students,
        };
        
        res.json(data);
    }

    async store(req, res) {
        const student = await Student.create(req.body);
        
        const { nama } = req.body;

        const data = {
            message: "Menambahkan data student " + nama,
            data: student,
        };

        res.json(data);
    }

    update(req, res) {
        const { id } = req.params;
        const { nama } = req.body;
        
        const data = {
            message: "Mengedit data student id " + id + nama,
            data: [],
        };

        res.json(data);
    }

    destroy(req, res) {
        const { id } = req.params;

        const data = {
            message: "Menghapus data student id " + id,
            data: [],
        };

        res.json(data);
    }
}

// buat object
const object = new StudenController();

// export
module.exports = object;