export default class Kelas {
    
    constructor(name, level, instructor) {
        this._name = name
        this._students = []
        this._level = level
        this._instructor = instructor
    }

    get students() {
        return this._students
    }

}