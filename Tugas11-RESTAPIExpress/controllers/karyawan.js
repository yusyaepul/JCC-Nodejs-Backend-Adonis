const fs = require('fs')

class KaryawanController{
    static findAll(req, res){
        fs.readFile('data.json', (err, data) => {
            if(err) {
                res.status(400).json({ "errors": "error membaca data" })
            } else {
                let karyawan = JSON.parse(data)
                res.status(200).json({ message: "berhasil get data karyawan", karyawan })
            }
        })
    }

    static register(req, res){
        fs.readFile('data.json', (err, data) => {
            if(err) {
                res.status(400).json({ "errors": "error membaca data" })
            } else {
                let existingData = JSON.parse(data)
                let { karyawan } = existingData
                let { name, password, role } = req.body
                let newKar = { name, password, role }
                newKar.isLogin = false

                if(newKar.role === 'trainer'){
                    newKar.students = []
                }

                karyawan.push(newKar)
                let newData = { ...existingData, karyawan }
                fs.writeFile('data.json', JSON.stringify(newData), (err) => {
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

    static show(req, res){
        let name = req.params.name
        fs.readFile('data.json', (err, data) => {
            if(err) {
                res.status(400).json({ "errors": "error membaca data" })
            } else {
                let karyawan = JSON.parse(data)
                let output = karyawan.filter(arr => arr.name == `${name}`)
                res.status(200).json({ message: "berhasil get data karyawan", output })
            }
        })
    }

    static async addSiswa(req, res){
        fs.readFile('data.json', (err, data) => {
            if(err) {
                res.status(400).json({ "errors": "error membaca data" })
            } else {
                let trainerName = req.params.name
                let { name, kelas } = body.req
                let karRaw = fs.promises.readFile('data.json')
                let karyawan = JSON.parse(karRaw)

                let admin = karyawan.find(kar => kar.role == "admin")
                if (!admin.isLogin) {
                    res.status(400).json({ "errors": "Bukan admin, tidak di ijinkan untuk menambah siswa" })
                }
                let indexTrainer = karyawan.findIndex(kar => kar.name == trainerName)

                if (indexTrainer == -1) {
                    res.status(400).json({ "errors": "Trainers tidak ditemukan" })
                } else {
                    let trainer = karyawan[indexTrainer]
                    if (trainer.students) {
                        let newStud = { name, kelas }
                        trainer.students.push(newStud)
                        res.status(201).json({ message: "Berhasil add siswa" })
                    } else {
                        trainer.students = [{ name: name, kelas: kelas }]
                    }

                    karyawan.splice(indexTrainer, 1, trainer)

                    return fs.promises.writeFile('data.json', JSON.stringify(karyawan))
                }
            }
        })
    }
}

module.exports = KaryawanController