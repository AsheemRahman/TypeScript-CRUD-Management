import {Response,Request} from 'express';
import { StudentSerivces } from '../services/studentServices';

export class StudentController {
    constructor(
        private studentSerivces:StudentSerivces
    ){}

    getAll = ( req:Request , res:Response ) :void => {
        const students = this.studentSerivces.getAll()
        res.json(students)
    }

    getStudentById = (req:Request,res:Response):void =>{
        const id = Number(req.params.id);
        const student = this.studentSerivces.getStudentById(id)
        if(student){
            res.json(student)
        }else{
            res.status(404).json({message: 'Student not found'})
        }
    }

    createStudent = (req:Request,res:Response):void  => {
        const {name,grade} = req.body;
        console.log(name)
        console.log(grade)
        const numericGrade = Number(grade)
        if(typeof name === 'string' && typeof !isNaN(numericGrade)){
            const newStudent = this.studentSerivces.createStudent(name,numericGrade)
            res.status(201).json(newStudent)
        }else{
            res.status(404).json({message: 'Invalid student data'})
        }

    }

    updateStudent = (req:Request,res:Response):void => {
        const id = Number(req.params.id);
        const {name,grade} = req.body;
        const newGrade = Number(grade)
        if(typeof name==='string' && typeof !isNaN(newGrade)){
            const updatedStudent = this.studentSerivces.updateStudent(id,name,newGrade)
            if(updatedStudent){
                res.status(201).json(updatedStudent)
            }else{
                res.status(404).json({message : 'Student not found'})
            }
        }else{
            res.status(400).json({message: 'Invalid student data'})
        }
    }

    deleteStudent = (req:Request,res:Response):void => {
        const id = Number(req.params.id);
        const deleted = this.studentSerivces.deleteStudent(id)
        if(deleted){
            res.status(204).json()
        }else{
            res.status(404).json({message: 'Student not found'})
        }
    }

}