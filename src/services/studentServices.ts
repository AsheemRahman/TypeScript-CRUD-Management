import { Student } from "../models/student";

export class StudentSerivces {
    private students: Student[] = []

    getAll():Student[] {
        return this.students;
    }

    getStudentById(id:number):Student | undefined {
        return this.students.find(student => student.id === id)
    }

    createStudent(name:string,grade:number):Student {
        const id = this.students.length + 1
        const newStudent = new Student(id,name,grade)
        this.students.push(newStudent)
        return newStudent
    }

    updateStudent(id:number,name:string,grade:number) : Student|undefined {
        const student = this.getStudentById(id)
        if(student){
            student.name = name,
            student.grade = grade
            return student
        }
        return undefined;
    }

    deleteStudent(id:number):boolean{
        const len = this.students.length
        this.students = this.students.filter(student => student.id != id )
        return this.students.length < len
    }
}