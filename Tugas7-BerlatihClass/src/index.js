import Bootcamp from "./lib/bootcamp"
import Student from "./lib/student"

// UNTUK RELEASE 0
const sanber = new Bootcamp("sanbercode")
sanber.createClass("Laravel", "beginner", "abduh")
sanber.createClass("React", "beginner", "abdul")

// UNTUK RELEASE 1
let names = ["regi", "ahmad", "bondra", "iqbal", "putri", "rezky"]
names.map((nama, index) => {
  let newStud = new Student(nama)
  let kelas = sanber.classes[index % 2]._name
  sanber.register(kelas, newStud)
})

// UNTUK KELUARAN
console.log('--- RELEASE 0 ---\n')
console.log(sanber.classes)

console.log('\n--- RELEASE 1 ---\n')
// menampilkan data kelas dan student nya
sanber.classes.forEach(kelas => {
  console.log(kelas)
});