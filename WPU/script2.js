// arrow function
const tampilNama = nama => {
    return `Hello ${nama}`
}

const tampilNama = (nama, waktu) => {
    return `Selamat ${waktu}, Hello ${nama}`
}

// implisit return
const tampilNama = () => `Hello Word!`
const tampilNama = nama => `Hallo ${nama}`
const tampilNama = (nama, waktu) => `Selamat ${waktu}, Hello ${nama}`

// looping
let mhs = ['wisnu', 'adi', 'nugraha']
let jumlahHuruf = mhs.map(nama => nama.length)
// array ke object
let jumlahHuruf = mhs.map(nama => ({ nama: nama, jmlHrf: nama.length}))
let jumlahHuruf = mhs.map(nama => ({ nama, jmlHrf: nama.length}))

console.log()
console.dir()
console.table()