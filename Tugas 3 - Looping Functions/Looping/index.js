var funcLib = require('./lib/funcLib');

var majuMundur = funcLib.majuMundur;
var ganjilGenap = funcLib.ganjilGenap;
var persegiPanjang = funcLib.persegiPanjang;
var tangga = funcLib.tangga;
var catur = funcLib.catur;

var args = process.argv;

switch (args[2]) {
    case 'while':
        majuMundur();
        break;
    case 'for':
        ganjilGenap();
        break;
    case 'persegiPanjang':
        var panjang = args[3];
        var lebar = args[4];
        persegiPanjang(panjang, lebar);
        break;
    case 'tangga':
        var sisi = args[3];
        tangga(sisi);
        break;
    case 'catur':
        var sisi = args[3];
        console.log(catur(sisi));
        break;
    default:
        console.log('perintah yang di masukkan salah!');
        break;
}