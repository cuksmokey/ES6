const num1 = 100
const num2 = 50
let val

// Simple Math Operator
val = num1 + num2
val = num1 * num2
val = num1 - num2
val = num1 / num2
val = num1 % num2 // modulus (nilai hasil pembagian)

// Math Object
val = Math.PI
val = Math.E
val = Math.round(3.4) // pembulatan biasa
val = Math.ceil(3.4) // pembulatan keatas
val = Math.floor(3.9) // pembulatan kebawah
val = Math.sqrt(81) // akar kuadrat
val = Math.abs(-5) // absolut. paksa minus ke positif
val = Math.pow(8, 2) // pangkat
val = Math.min(2, 33, 1, 5) // mencari angka terendah
val = Math.max(2, 33, 1, 5) // mencari angka tertinggi
val = Math.random() // mencari angka random
val = Math.floor(Math.random() * 50 + 1) // membatasi angka random 

console.log(val)