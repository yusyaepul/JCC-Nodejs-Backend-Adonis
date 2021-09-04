var args = process.argv;

switch (args[2]) {
    case 'arrayToObject':
        function arrayToObject(arr) {
            var output = [];
            var now = new Date();
            var thisYear = now.getFullYear();
            
            for (var i = 0; i < arr.length; i++) {
                var item = arr[i];
                var firstName = item[0];
                var lastName = item[1];
                var fullName = firstName+' '+lastName;
                var gender = item[2];
                var yob = item[3]; // Year of Birth
                
                if (yob === undefined) {
                    var age = 'Invalid Birth Year';
                } else if (yob > thisYear) {
                    var age = 'Invalid Birth Year';
                } else {
                    var age = thisYear - yob;
                }
        
                console.log(i+1+'. '+fullName+': { firstName: '+firstName+', lastName: '+lastName+', gender: '+gender+', age: '+age+' }');
            }
            
            return output;
        }
          
        var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ];
        arrayToObject(people);
        console.log('\n')
        var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ];
        arrayToObject(people2);
        //arrayToObject([]);
        break;
    case 'shoppingTime':
        var memberId = args[3];
        var money = args[4];

        function shoppingTime(memberId, money){
            var output = {};
            var money = parseInt(money);
            var memberId;

            var barang = [
                ["Sepatu Stacattu", 1500000],
                ["Baju Zoro", 500000],
                ["Baju H&N", 250000],
                ["Sweater Uniklooh", 175000],
                ["Casing Handphone", 50000]
            ];

            var hargaBelanja = [];
            var listPurchased = [];
            var sum = 0;
            var changeMoney = 0;

            if(memberId === undefined){
                console.log('Mohon maaf, Toko X hanya berlaku untuk member');
            }

            if(money < 50000){
                console.log('Mohon maaf, uang tidak cukup');
            }

            for (i = 0; i < barang.length; i++){
                var nama_barang = barang[i][0];
                var harga = barang[i][1];
                
                if(harga < money){
                    listPurchased.push(nama_barang);
                    hargaBelanja.push(harga);
                }
            }
              
            for (j = 0; j < hargaBelanja.length; j++){
                sum += hargaBelanja[j];
            }

            changeMoney = money - sum;

            output.memberId = memberId;
            output.money = money;
            output.listPurchased = listPurchased;
            output.changeMoney = changeMoney;

            console.log(output);
            console.log(sum);
        }
        shoppingTime(memberId, money);
        break;
    case 'naikAngkot':
        function naikAngkot(arrPenumpang){
            var rute = ['A', 'B', 'C', 'D', 'E', 'F']
            var output = [];
          
            for (var i = 0; i < arrPenumpang.length; i++) {
              var nama = arrPenumpang[i][0];
              var dari = arrPenumpang[i][1];
              var ke = arrPenumpang[i][2];
              
              function range(start,stop) {
                var result=[];
                for (var j=start.charCodeAt(0),end=stop.charCodeAt(0); j<=end; ++j){
                  result.push(String.fromCharCode(j));
                }
                return result;
              }
              
              var rutenya = range(dari, ke);
              var bayar = (rutenya.length - 1)*2000;
              
              var deklarasi = {};
                deklarasi.penumpang = nama;
                deklarasi.naikDari = dari;
                deklarasi.tujuan = ke;
                deklarasi.bayar = bayar;

              output.push(deklarasi);
            }
              
            
            console.log(output);
          }

          var penumpang = [['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']];
          naikAngkot(penumpang);
          var penumpang2 = [['Dimitri', 'B', 'F']];
          naikAngkot(penumpang2);
        break;
    default:
        console.log('perintah yang di masukkan salah!');
        break;
}