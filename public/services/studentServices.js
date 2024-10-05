"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentSerivces = void 0;
const student_1 = require("../models/student");
class StudentSerivces {
    constructor() {
        this.students = [];
    }
    getAll() {
        return this.students;
    }
    getStudentById(id) {
        return this.students.find(student => student.id === id);
    }
    createStudent(name, grade) {
        const id = this.students.length + 1;
        const newStudent = new student_1.Student(id, name, grade);
        this.students.push(newStudent);
        return newStudent;
    }
    updateStudent(id, name, grade) {
        const student = this.getStudentById(id);
        if (student) {
            student.name = name,
                student.grade = grade;
            return student;
        }
        return undefined;
    }
    deleteStudent(id) {
        const len = this.students.length;
        this.students = this.students.filter(student => student.id != id);
        return this.students.length < len;
    }
}
exports.StudentSerivces = StudentSerivces;
