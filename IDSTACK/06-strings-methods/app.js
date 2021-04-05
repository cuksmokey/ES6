const firstName = 'Stewart'
const lastName = 'Hodges'
const phar = 'Hello, my name is ' + firstName

let val

val = firstName + lastName

// Concatenation
val = firstName + ' ' + lastName

// Append
val = 'Marshal '
val += 'Mathers'

// Escaping
val = 'That\'s awesome, I can\'t wait it'

// length
val = firstName.length

// Concat
val = firstName.concat(' ', lastName)

// Change case
val = firstName.toUpperCase()
val = firstName.toLowerCase()

// index untuk cari string
val = firstName[3]

// indexOf() > string untuk cari index
val = firstName.indexOf('S')

// charAt() > index untuk cari string
val = firstName.charAt(0)

// substring()
val = firstName.substring(0, 4)

// slice
val = firstName.slice(0, 4) // cari dari depan
val = firstName.slice(-3) // cari dari belakang

// split > membuat string ke array
val = phar.split(' ')

// replace > mengubah string ke string baru
val = phar.replace('Hello', 'Hi')

// includes > cari string sifat boolean
val = phar.includes('Hello')

console.log(val)