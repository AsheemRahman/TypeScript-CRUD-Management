"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const studentController_1 = require("../controllers/studentController");
const studentServices_1 = require("../services/studentServices");
const Router = (0, express_1.default)();
const studentSerivce = new studentServices_1.StudentSerivces();
const studentController = new studentController_1.StudentController(studentSerivce);
Router.get("/", studentController.getAll);
Router.get("/:id", studentController.getStudentById);
Router.post("/", studentController.createStudent);
Router.put("/:id", studentController.updateStudent);
Router.delete("/:id", studentController.deleteStudent);
exports.default = Router;
