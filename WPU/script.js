// Cara untuk membuat Object pada javascript
// 1. Object Literal
// PROBLEM TIDAK EFEKTIK UNTUK OBJECT YANG BANYAK
let mahasiswa1 = {
    nama: 'Sandhika',
    energi: 10,
    makan: function(porsi) {
        this.energi = this.energi + porsi
        return mahasiswa1
    }
}

let mahasiswa2 = {
    nama: 'Doddy',
    energi: 20,
    makan: function(porsi) {
        this.energi = this.energi + porsi
        return mahasiswa2
    }
}

// 2. Function Declaration
function Mahasiswa(nama, energi) {
    let mahasiswa = {}
    mahasiswa.nama = nama
    mahasiswa.energi = energi
    mahasiswa.makan = function(porsi) {
        this.energi += porsi
        return mahasiswa
    }
    mahasiswa.main = function(jam) {
        this.energi -= jam
        return mahasiswa
    }

    return mahasiswa
}

let wisnu = Mahasiswa('wisnu', 20)

// 3. Constructor Function
function Dosen(nama, energi) {
    // let mahasiswa = {}
    this.nama = nama
    this.energi = energi
    this.makan = function(porsi) {
        this.energi += porsi
    }
    this.main = function(jam) {
        this.energi -= jam
    }
    // return mahasiswa
}

let nugraha = new Dosen('wisnu', 20)

// 4. Object.create()
const methodMhs = {
    makan: function(porsi) {
        this.energi += porsi
    },
    main: function(jam) {
        this.energi -= jam
    }
}

function Mhs(nama, energi) {
    // let mahasiswa = {}
    let mhs = Object.create(methodMhs)
    mhs.nama = nama
    mhs.energi = energi

    return mhs
}

let adi = Mhs('wisnu', 20)