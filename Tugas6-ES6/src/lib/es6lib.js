export const sapa = (nama = "Yus") => console.log(`Halo selamat pagi, ${nama}`)

export const convert = (nama, domisili, umur) => {
    let dataDiri = {
        nama: `${nama}`,
        domisili: `${domisili}`,
        umur: `${umur}`
    }
    console.log(dataDiri)
}

export const checkScore = (arr) => {
    let delKoma = arr.split(",")
    let name = delKoma[0].split(":")
    let kelas = delKoma[1].split(":")
    let nilai = delKoma[2].split(":")

    let output = {
        name: name[1],
        class: kelas[1],
        score: nilai[1]
    }

    console.log(output)
}

const data = [
    { name: "Ahmad", kelas: "adonis"},
    { name: "Regi", kelas: "laravel"},
    { name: "Bondra", kelas: "adonis"},
    { name: "Iqbal", kelas: "vuejs" },
    { name: "Putri", kelas: "Laravel" }
]

export const filterData = (cari) => {
    let [ ...arr] = data
    let output = data.filter(arr => arr.kelas.toLowerCase() == `${cari}`.toLowerCase())
    return output
}