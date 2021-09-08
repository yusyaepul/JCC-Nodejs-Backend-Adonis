import Kelas from "./kelas"
import Student from "./student"

export default class Bootcamp {
    
    constructor(name) {
        this._name = name
        this._classes = []
        this._students = []
    }

    createClass(name, level, instructor) {
        let kelas = new Kelas(name, level, instructor)
        this._classes.push(kelas)
    }

    register(kelas, newStud) {
        let stud = new Student(newStud)
        for(let i=0; i<kelas.length; i++){
            if(this._classes == kelas){
                this._students.push(stud)
            }
        }
    }

    get name() {
        return this._name
    }

    get classes() {
        return this._classes
    }

    get students() {
        return this._students
    }

}