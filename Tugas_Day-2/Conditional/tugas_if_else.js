var nama = "";
var peran = ""; //Peran tersedia : Penyihir, Guard, Warewolf

if(nama == ""){
    console.log('Nama harus diisi!');
} else if(peran == ""){
    console.log('Halo '+nama+', Pilih peranmu untuk memulai game!');
} else if(peran == "Penyihir"){
    console.log('Selamat datang di Dunia Werewolf, '+nama);
    console.log('Halo Penyihir '+nama+', kamu dapat melihat siapa yang menjadi werewolf!');
} else if(peran == "Guard"){
    console.log('Selamat datang di Dunia Werewolf, '+nama);
    console.log('Halo Guard '+nama+', kamu akan membantu melindungi temanmu dari serangan werewolf.');
} else {
    console.log('Selamat datang di Dunia Werewolf, '+nama);
    console.log('Halo Werewolf '+nama+', Kamu akan memakan mangsa setiap malam!');
}