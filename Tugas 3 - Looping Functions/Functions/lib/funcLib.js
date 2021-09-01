function teriak(){
    var text = 'Helo Sanbers!';
    return text;
}

function kalikan(num1, num2){
    return num1 * num2;
}

function introduce(name, age, address, hobby){
    var perkenalan = 'Halo nama saya '+name+', umur saya '+age+' tahun, alamat saya di '+address+', dan saya punya hobby yaitu '+hobby+'!';
    return perkenalan;
}

module.exports = {
    teriak: teriak,
    kalikan: kalikan,
    introduce: introduce
}