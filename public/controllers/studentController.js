"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
class StudentController {
    constructor(studentSerivces) {
        this.studentSerivces = studentSerivces;
        this.getAll = (req, res) => {
            const students = this.studentSerivces.getAll();
            res.json(students);
        };
        this.getStudentById = (req, res) => {
            const id = Number(req.params.id);
            const student = this.studentSerivces.getStudentById(id);
            if (student) {
                res.json(student);
            }
            else {
                res.status(404).json({ message: 'Student not found' });
            }
        };
        this.createStudent = (req, res) => {
            const { name, grade } = req.body;
            console.log(name);
            console.log(grade);
            const numericGrade = Number(grade);
            if (typeof name === 'string' && typeof !isNaN(numericGrade)) {
                const newStudent = this.studentSerivces.createStudent(name, numericGrade);
                res.status(201).json(newStudent);
            }
            else {
                res.status(404).json({ message: 'Invalid student data' });
            }
        };
        this.updateStudent = (req, res) => {
            const id = Number(req.params.id);
            const { name, grade } = req.body;
            const newGrade = Number(grade);
            if (typeof name === 'string' && typeof !isNaN(newGrade)) {
                const updatedStudent = this.studentSerivces.updateStudent(id, name, newGrade);
                if (updatedStudent) {
                    res.status(201).json(updatedStudent);
                }
                else {
                    res.status(404).json({ message: 'Student not found' });
                }
            }
            else {
                res.status(400).json({ message: 'Invalid student data' });
            }
        };
        this.deleteStudent = (req, res) => {
            const id = Number(req.params.id);
            const deleted = this.studentSerivces.deleteStudent(id);
            if (deleted) {
                res.status(204).json();
            }
            else {
                res.status(404).json({ message: 'Student not found' });
            }
        };
    }
}
exports.StudentController = StudentController;
