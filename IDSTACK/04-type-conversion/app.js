let val

// Number to String
val = String(123)
val = String(5+5)

// Boolean to String
val = String(false)

// Date to String
val = String(new Date())

// Array to String
val = String([1,2,3,4,5])

// .toString()
val = (5).toString()
val = (true).toString()

// String to Number
val = Number('51.30')

// Boolean to String
val = Number(true)
val = Number(false)

val = parseInt('100.55')
val = parseFloat('100.5')

console.log(val)
console.log(typeof val)
console.log(val.toFixed())
// console.log(val.length) // KHUSUS STR