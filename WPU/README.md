# 1.1 - Object

Membuat object pada js
- Object Literal
```
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
```

- Function Declaration
```
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
```

- Constructor Function (keyword new)
```
function Dosen(nama, energi) {
    this.nama = nama
    this.energi = energi
    this.makan = function(porsi) {
        this.energi += porsi
    }
    this.main = function(jam) {
        this.energi -= jam
    }
}

let nugraha = new Dosen('wisnu', 20)
```

- Object.create()

# 1.2 - Object.create()
```
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
```

# 1.3 - Prototype

___

# 2.1 - Execution Context, Hosting, Scope