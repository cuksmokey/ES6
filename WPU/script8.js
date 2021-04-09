// for..of
// aray
const mhs = ['wisnu', 'adi', 'nugraha']

// for( let i = 0; i < mhs.length; i++) {
//     console.log(mhs[i]);
// }

// mhs.forEach(m =>
//     console.log(m)
// )
// ambil index di forEach
// mhs.forEach((m, i) => console.log(`${m} mhs ke ${i+1}`))

for(const mm of mhs) {
    console.log(mm);
}
// ambil index di for..of
for(const [i, m] of mhs.entries()) {
    console.log(`${m} mhs ke ${i+1}`)
}

// string
const nama = 'wisnu'
for(const n of nama){
    console.log(n);
}

//

// NodeList
const liNama = document.querySelectorAll('.nama')

// liNama.forEach(n => console.log(n.textContent))
for(n of liNama) {
    console.log(n.textContent);
}

//

// arguments
function jumlahAngka() {
    let jumlah = 0
    for(a of arguments) {
        jumlah += a
    }
    return jumlah
}

console.log(jumlahAngka(1,2,3,4,5));

// // // // //

// for..in
// object
const mhs1 = {
    nama: 'Wisnu Adi Nugraha',
    umur: 24,
    email: 'bolongs350@gmail.com'
}

for(xx in mhs1) {
    // index
    console.log(xx)
    // values
    console.log(mhs1[xx])
}