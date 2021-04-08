// Destructuring Variable / Assigmnet

// Desstructuring Array
const perkenalan = ['Halo', 'nama', 'saya', 'Wisnu']

// melompati/skip
const [salam, , , nama0] = perkenalan
console.log(salam);

const [salam1, satu, dua, nama1] = perkenalan
console.log(nama1);

//

// swap items
let a = 1
let b = 2
console.log(a);
console.log(b);
[a, b] = [b, a]
console.log(a);
console.log(b);

//

// Rest parameter
const [int, ...val] = [1,2,3,4,5,6,7,8]
console.log(int);
console.log(val);

////

// Destructuring  Object
const mhs = {
    nama3: 'wisnu',
    umur3: 24
}

const {nama3,umur3} = mhs
console.log(mhs);

// Assigment tanpa deklarasi object
({nama4, umur4} = {
    nama4: 'wisnu',
    umur4: 24
})
console.log(nama4);

// Assigment ke variabel baru
const mhs1 = {
    nama: 'wisnu',
    umur: 24
}

const {nama:n, umur: u} = mhs1
console.log(n);

// memberi nilai default + assignmern ke val baru
const mhs2 = {
    nama: 'wisnu',
    umur: 24
}

const {nama:nn, umur: uu, email: ee = 'email@default.com'} = mhs2
console.log(ee);