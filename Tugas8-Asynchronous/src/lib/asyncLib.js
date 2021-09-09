import fs from 'fs'

const path = 'data.json'

export class Karyawan {
    constructor(nama, password, role) {
        this.nama = nama,
        this.password = password,
        this.role = role
    }

    static register(nama, password, role, callback) {
        let newKar = new this(nama, password, role)
        newKar.isLogin = false

        fs.readFile(path, (err, data) => {
            if (err) callback(err, null)
            let dataKar = JSON.parse(data)
            dataKar.push(newKar)
            fs.writeFile(path, JSON.stringify(dataKar), (err) => {
                if (err) callback(err)
                callback(null, 'Berhasil daftar')
            })
        })
    }

    static login(nama, password, callback) {
        let cariNama = nama
        let cariPass = password

        fs.promises.readFile(path)
            .then(data => {
                let realDataKar = JSON.parse(data)
                let output = realDataKar.filter(arrData => arrData.nama.toLowerCase() == `${cariNama}`.toLocaleLowerCase() && arrData.password.toLowerCase() == `${cariPass}`.toLocaleLowerCase())
                callback(null, output)
            })
            .catch(err => {
                callback(err)
            })
    }
}