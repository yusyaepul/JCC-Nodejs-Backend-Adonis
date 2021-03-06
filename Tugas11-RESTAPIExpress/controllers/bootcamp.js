const fs = require('fs')

class BootcampController{
    static findAll(req, res){
        fs.readFile('data.json', (err, dt) => {
            if(err) {
                res.status(400).json({ "errors": "error membaca data" })
            } else {
                let data = JSON.parse(dt)
                res.status(200).json({ message: "berhasil get data karyawan", data })
            }
        })
    }

    static register(req, res){
        fs.readFile('data.json', (err, data) => {
            if(err) {
                res.status(400).json({ "errors": "error membaca data" })
            } else {
                let dataKar = JSON.parse(data)
                let { name, password, role } = req.body
                let newKar = { name, password, role}
                newKar.isLogin = false
                dataKar.push(newKar)
                fs.writeFile('data.json', JSON.stringify(dataKar), (err) => {
                    if(err) {
                        res.status(400).json({ "errors": "error membaca data" })
                    } else {
                        res.status(201).json({ message: "Berhasil register" })
                    }
                })
            }
        })
    }

    static login(req, res){
        let { name, password } = req.body

        fs.promises.readFile('data.json')
        .then(data => {
            let dataKar = JSON.parse(data)
            let indexKar = dataKar.findIndex(kar => kar.name == name)
            if (indexKar == -1) {
                res.status(400).json({ "errors": "data tidak ditemukan" })
            } else {
                let karyawan = dataKar[indexKar]
                if (karyawan.password == password) {
                    karyawan.isLogin = true
                    dataKar.splice(indexKar, 1, karyawan)
                    return fs.promises.writeFile('data.json', JSON.stringify(dataKar))
                } else {
                    console.log("password salah")
                }
            }
        })
        .then(saved => {
            res.status(201).json({ message: "Berhasil login" })
        })
        .catch(err => res.status(400).json({ "errors": "error membaca data" }))
    }

    static addSiswa(req, res){
        let { name, kelas } = req.body
        let trainerName = req.params.name
        
        fs.promises.readFile('data.json')
        .then(data => {
            let dataKar = JSON.parse(data)
            let admin = dataKar.find(kar => kar.role == "admin")
            if (!admin.isLogin) {
                res.status(400).json({ "errors": "Bukan admin, tidak di ijinkan untuk menambah siswa" })
            }
            let indexTrainer = dataKar.findIndex(kar => kar.name == trainerName)

            if (indexTrainer == -1) {
                res.status(400).json({ "errors": "Trainers tidak ditemukan" })
            } else {
                let trainer = dataKar[indexTrainer]
                if (trainer.students) {
                    let newStud = { name, kelas }
                    trainer.students.push(newStud)
                    res.status(201).json({ message: "Berhasil add siswa" })
                } else {
                    trainer.students = [{ name: name, kelas: kelas }]
                }

                dataKar.splice(indexTrainer, 1, trainer)

                return fs.promises.writeFile('data.json', JSON.stringify(dataKar))
            }
        })
        .then(saved => {
            res.status(201).json({ message: "Berhasil add siswa" })
        })
        .catch(err => res.status(400).json({ "errors": "error membaca data" }))
    }
}

module.exports = BootcampController