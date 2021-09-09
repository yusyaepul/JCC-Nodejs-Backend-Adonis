import { Karyawan } from './lib/asyncLib'

let args = process.argv
let obj = args[3]
let str = obj.split(',')

switch(args[2]){
    case 'register':
        let objStr = {
            nama: str[0],
            password: str[1],
            role: str[2],
            isLogin: false
        }
        Karyawan.register(objStr.nama, objStr.password, objStr.role, function(err, data) {
            if (err) console.log(err)
            console.log(data)
        })
        break;
    case 'login':
        let objLog = {
            nama: str[0],
            password: str[1]
        }
        Karyawan.login(objLog.nama, objLog.password, function(err, data) {
            if (err) console.log(err)
            console.log(data)
        })
    default:
        break;
}