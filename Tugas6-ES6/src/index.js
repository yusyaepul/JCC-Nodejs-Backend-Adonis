import { 
    sapa,
    convert,
    checkScore,
    filterData
} from './lib/es6lib'

let args = process.argv

let nama = args[3]
let domisili = args[4]
let umur = args[5]

let arr = args[3]

let cari = args[3]

switch(args[2]){
    case 'sapa':
        sapa(nama)
        break;
    case 'convert':
        convert(nama, domisili, umur)
        break;
    case 'checkScore':
        checkScore(arr)
        break;
    case 'filterData':
        console.log(filterData(cari))
        break;
    default:
        break;
}
