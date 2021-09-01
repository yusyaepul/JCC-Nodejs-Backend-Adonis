var funcLib = require('./lib/funcLib');

var majuMundur = funcLib.majuMundur;
var ganjilGenap = funcLib.ganjilGenap;
var persegiPanjang = funcLib.persegiPanjang;

var args = process.argv;

switch (args[2]) {
    case 'while':
        majuMundur();
        break;
    case 'for':
        ganjilGenap();
        break;
    case 'persegiPanjang':
        persegiPanjang();
        break;
    default:
        console.log('perintah yang di masukkan salah!');
        break;
}