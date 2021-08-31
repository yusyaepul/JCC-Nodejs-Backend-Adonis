var hari = 1;
var bulan = 12;
var tahun = 2000;

switch(true){
    case hari > 31 || hari < 1:
        hari = 'Masukkan tanggal antara 1 - 31';
        break;
}

switch(true){
    case tahun > 2200 || tahun < 1900:
        tahun = 'Masukkan tahun antara 1900 - 2200';
        break;
}

switch(bulan){
    case 1:
        bulan = 'Januari';
        break;
    case 2:
        bulan = 'Februari';
        break;
    case 3:
        bulan = 'Maret';
        break;
    case 4:
        bulan = 'April';
        break;
    case 5:
        bulan = 'Mei';
        break;
    case 6:
        bulan = 'Juni';
        break;
    case 7:
        bulan = 'Juli';
        break;
    case 8:
        bulan = 'Agustus';
        break;
    case 9:
        bulan = 'September';
        break;
    case 10:
        bulan = 'Oktober';
        break;
    case 11:
        bulan = 'November';
        break;
    case 12:
        bulan = 'Desember';
        break;
    default:
        bulan = 'Masukkan bulan anatara 1 - 12';
}

return console.log(hari+' '+bulan+' '+tahun);

/* 
Output : 1 Desember 2000
Jika bulan 0 atau 13, Output bulan jadi : Masukkan bulan anatara 1 - 12
Jika tahun lebih besar dari 2200 atau kurang dari 1900 Output tahun jadi : Masukkan tahun antara 1900 - 2200
*/