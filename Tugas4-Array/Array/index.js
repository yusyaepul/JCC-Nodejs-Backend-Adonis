var arrayLib = require('./lib/arrayLib');

var range = arrayLib.range;
var rangeWithStep = arrayLib.rangeWithStep;
var sumRange = arrayLib.sumRange;
var sum = arrayLib.sum;
var dataHandling = arrayLib.dataHandling;
var balikKata = arrayLib.balikKata;

var args = process.argv;

switch (args[2]) {
    case 'range':
        var startNum = args[3];
        var finishNum = args[4];
        range(startNum, finishNum);
        break;
    case 'rangeWithStep':
        var startNum = args[3];
        var finishNum = args[4];
        var step = args[5];
        rangeWithStep(startNum, finishNum, step);
        break;
    case 'sum':
        var startNum = args[3];
        var finishNum = args[4];
        var step = args[5];

        if(step === undefined){
            var step = 1;
        }

        if(finishNum === undefined){
            var finishNum = 1;
        }

        console.log(sum(sumRange(startNum, finishNum, step)));
        break;
    case 'dataHandling':
        dataHandling();
        break;
    case 'balikKata':
        var kata = args[3];
        console.log(balikKata(kata));
        break;
    default:
        console.log('perintah yang di masukkan salah!');
        break;
}