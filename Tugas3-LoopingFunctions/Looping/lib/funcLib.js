function majuMundur(){
    var a = 2
    console.log('LOOPING PERTAMA')
    while (a < 22){
        console.log(a, '- I love coding')
        a = a + 2
    }

    console.log('LOOPING KEDUA')
    var b = 20
    while (b > 0){
        console.log(b, '- I will become a mobile developer')
        b -= 2
    }

}

function ganjilGenap(){
    console.log('OUTPUT');
    for(var i=1; i<=20; i++) {
        if (i % 3 === 0 && i % 2 == 1) {
            console.log(i +  " I Love Coding");
        }
        else if (i % 2 === 0) {
            console.log(i + " Berkualitas");   
        }
        else if (i % 2 == 1){
            console.log(i + " Santai");
        }
    }   
}

function persegiPanjang(panjang, lebar){
    for (var i = 0; i < lebar; i++) {
        var hasil = '';
        for (var j = 0; j < panjang; j++) {
            hasil = hasil + '#';
        }
        console.log(hasil);
    }
    return hasil;
}

function tangga(sisi) {
    var hasil = '';
    for (var i = 0; i < sisi; i++) {
        hasil = hasil + '#';
        console.log(hasil);
    }
    return hasil;
}

function catur(sisi){
    for (var i = 1; i <= sisi; i++) {
        hasil = '';
        if(i % 2 == 0){
            for(var j = 1; j <= sisi; j++){
                if(j % 2 == 0){
                    hasil = hasil + ' ';
                } else {
                    hasil = hasil + '#';
                }
            }
        } else {
            for(var j = 1; j <= sisi; j++){
                if(j % 2 == 0){
                    hasil = hasil + '#';
                } else {
                    hasil = hasil + ' ';
                }
            }
        }
        console.log(hasil);
    }
    return hasil; 
}

module.exports = {
    majuMundur: majuMundur,
    ganjilGenap: ganjilGenap,
    persegiPanjang: persegiPanjang,
    tangga: tangga,
    catur: catur
}