var args = process.argv;

switch (args[2]) {
    case 'arrayToObject':
        function arrayToObject(arr) {
            var output = [];
            var now = new Date();
            var thisYear = now.getFullYear();
            
            for (var i = 0; i < arr.length; i += 1) {
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
    default:
        console.log('perintah yang di masukkan salah!');
        break;
}