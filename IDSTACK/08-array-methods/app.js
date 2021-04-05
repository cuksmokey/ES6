// Create Array > 2 Cara
const number = [1,2,3,4,5,6]
const number2 = new Array(90,7,43,100,300)
const fruit = ['Apple', 'Banana', 'Cherry', 'Orange', 'Pear']
const mix = [24, 'Hello', true, undefined, null, {a:1, b:2}, new Date()]

// Deklarasi Variable
let val

// Get Length
val = number.length // > 6

// Check jika tipe data Array
val = Array.isArray(number2) // > true

// Ambil Satu Value
val = fruit[4] // > Pear
val = fruit[0] // > Apple

// Insert into Array
fruit[2] = 'Grape' // > Cherry > Grape

// Cari index dari value
val = mix.indexOf(undefined) // > 3

// Mutating
// Add on to end
number.push(7) // > [1,2,3,4,5,6,7]

// Add on to front
number.unshift(0) // > [0,1,2,3,4,5,6,7]

// Take off from end
number.pop() // > [0,1,2,3,4,5,6]

// Take off from front
number.shift() // > [1,2,3,4,5,6]

// Splice
number.splice(1,1) // > [1,3,4,5,6]

// Reverse - ubah urutan
fruit.reverse()

console.log(number)
console.log(fruit)
console.log(val)