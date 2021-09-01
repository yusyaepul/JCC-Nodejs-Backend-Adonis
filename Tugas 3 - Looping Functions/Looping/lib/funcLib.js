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
    for (var x=1; x<=20; x++) {
        if (x % 6 === 3) {
            console.log(x +  " I Love Coding");
        }
        else if (x % 2 === 0) {
            console.log(x + " Berkualitas");   
        }
        else {
            console.log(x + " Santai");
        }
    }   
}

function persegiPanjang(){
    
}

module.exports = {
    majuMundur: majuMundur,
    ganjilGenap: ganjilGenap,
    persegiPanjang: persegiPanjang
}