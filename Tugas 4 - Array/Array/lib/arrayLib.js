function range(startNum, finishNum){
    var arr = [];
    var startNum =  parseInt(startNum);
    var finishNum = parseInt(finishNum);

    if(startNum <= finishNum){
        for (var i = startNum; i <= finishNum; i++) {
            arr.push(i);
        }
    } else if(startNum > finishNum){
        for (var i = startNum; i >= finishNum; i--) {
            arr.push(i);
        }
    } else {
        arr;
    }

    console.log(arr);
}

function rangeWithStep(startNum, finishNum, step){
    var arr = [];
    var startNum = parseInt(startNum);
    var finishNum = parseInt(finishNum);
    var step = parseInt(step);
    
    if(startNum <= finishNum){
        for(var i = startNum; i <= finishNum; i += step){
            arr.push(i);
        }
    } else if(startNum > finishNum){
        var stepMin = -1*step;
        for(var i = startNum; i >= finishNum; i += stepMin){
            arr.push(i);
        }
    } else {
        arr;
    }
    console.log(arr);
}

function sumRange(startNum, finishNum, step) {
    var numbers = [];
    var startNum = parseInt(startNum);
    var finishNum = parseInt(finishNum);
    var step = parseInt(step);

    if(step>0){
        for(var i=startNum; i<=finishNum; i+=step) {
            numbers.push(i);
        }
    } else {
        for(var i=finishNum; i>=startNum; i+=step) {
            numbers.push(i);
        }
    }
    return numbers;
}
  
function sum(array) {
    if(array.length === 0){
        return 0;
    }
    return array.pop() + sum(array);
}

function dataHandling(){
    var input = [
        ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
        ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
        ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
        ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
    ] 
    for(let i = 0; i < input.length; i++){
        var no_id = 'Nomor ID: ' + input[i][0];
        var nama_lengkap = 'Nama Lengkap: ' + input[i][1];
        var ttl = 'TTL: ' + input[i][3];
        var hobi = 'Hobi: ' + input[i][4];

        console.log(no_id + '\n', nama_lengkap + '\n', ttl + '\n', hobi + '\n');
    }
}

function balikKata(kata) {
    var text = '';
    for (var i = kata.length - 1; i >= 0; i--) {
        if (kata[i] == ',') {
          text+= ' ';
        } else {
          text+= kata[i];
        }
    }
    return text;
}

module.exports = {
    range: range,
    rangeWithStep: rangeWithStep,
    sumRange: sumRange,
    sum: sum,
    dataHandling: dataHandling,
    balikKata: balikKata
}