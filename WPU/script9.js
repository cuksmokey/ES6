// Spread Operator
// memecah iterables menjadi single element

const mhs = ['wisnu', 'adi', 'nugraha']
console.log(...mhs[0]);

// Menggabungkan 2 array
const mhs1 = ['wisnu', 'adi', 'nugraha']
const dosen = ['Ade', 'Hendra', 'Wanda']
const orang = [...mhs, 'Anjay', ...dosen]
console.log(orang)

// meng-copy array
const mhs2 = ['wisnu', 'adi', 'nugraha']
const mhss = [...mhs2]
mhss[0] = 'Fajar'
console.log(mhs2)
console.log(mhss)

// contoh lain
const liMhs = document.querySelectorAll('li')
const tmpMhs = [...liMhs].map(m => m.textContent)
console.log(tmpMhs)

// modifikasi h1 title
const nama = document.querySelector('.title')
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('')
// console.log(huruf)
nama.innerHTML = huruf