// filter, map, reduce

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// filter
// 1
const fillAngka = angka.filter(function(a) {
    return a >= 3;
});
// 2
const fillAngka2 = angka.filter(a => a >= 3);
// console.log(fillAngka2);

// map
const mapAngka = angka.map(a => a * 2);
// console.log(mapAngka);

// reduce
// 1
const reduceAngka = angka.reduce((acc, curr) => acc + curr);
// 2
const reduceAngka2 = angka.reduce((acc, curr) => acc + curr, 10);
// console.log(reduceAngka2);

// Method Chaining
const hasil = angka.filter(a => a > 5) // cari angka
.map(a => a * 3) // perulangan kali angka
.reduce((acc, cur) => acc + cur) // operasi matematika
console.log(hasil);