// konsep this pada arrow function
// constructor function
const Mahasiswa = function () {
    this.nama = 'wisnu'
    this.umur = 24
    this.sayHello = function () {
        console.log(`Nama ${this.nama}, Umur ${this.umur}`)
    }
}

const wisnu = new Mahasiswa()

// arrow function di constructor function
const Mahasiswa2 = function () {
    this.nama = 'wisnu'
    this.umur = 24
    this.sayHello = () => {
        console.log(`Nama ${this.nama}, Umur ${this.umur}`)
    }
}

const wisnu2 = new Mahasiswa2()

// arrow function di object literal
// this tidak berlaku

const Mahasiswa3 = function () {
    this.nama = 'wisnu'
    this.umur = 24
    this.sayHello = function () {
        console.log(`Nama ${this.nama}, Umur ${this.umur}`)
    }
}

const wisnu3 = new Mahasiswa3()