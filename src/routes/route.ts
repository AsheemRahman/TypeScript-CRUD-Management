import express from "express";
import { StudentController } from "../controllers/studentController";
import { StudentSerivces } from "../services/studentServices";

const Router = express();

const studentSerivce = new StudentSerivces();
const studentController = new StudentController(studentSerivce);

Router.get("/", studentController.getAll);
Router.get("/:id", studentController.getStudentById);
Router.post("/", studentController.createStudent);
Router.put("/:id", studentController.updateStudent);
Router.delete("/:id", studentController.deleteStudent);


export default Router;