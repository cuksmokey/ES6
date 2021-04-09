// Destructuring return value

// array
function jumlahKali(a, b) {
    return [a + b, a * b]
}

// urutan berpengaruh
const [jumlah, kali] = jumlahKali(6, 2)
console.log(jumlah);
console.log(kali);

// object
function kalkulasi(a, b) {
    return {
        tambah: a + b,
        kurang: a - b,
        kali1: a * b,
        bagi: a / b
    }
}

// urutan tak berpengaruh
const {kali1, bagi, tambah, kurang} = kalkulasi(6,3)
console.log(tambah);

//

// Destructuring functiuon arguments
const mhs = {
    nama: 'Wisnu Adi Nugraha',
    umur: 24,
    email: 'bolongs350@gmail.com',
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 90
    }
}

function cetakMhs({ nama, umur, nilai: { tugas, uts, uas }}){
    return `Halo ${nama}, umur ${umur} tahun., nilai uas ${uas}`
}

console.log(cetakMhs(mhs));