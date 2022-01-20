// import Student Controller
const StudentController = require("../controllers/StudentController");
// import express
const express = require("express");

// buat routing modular 
const router = express.Router();

// definisikan routing
router.get("/", function(req, res) {
    res.send("Hello World");
});

// Routing untuk students
router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);
// menambah get untuk get detail source
router.get("/students/:id", StudentController.show);

// export
module.exports = router;