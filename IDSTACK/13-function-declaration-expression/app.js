// function declaration
// bisa panggil sebelum function di buat
console.log(greet('a', 'b')) 
function greet(firstName = 'first', lastName = 'last'){
    return `Hello, ${firstName} ${lastName}`
}

// function expression
const square = function(x = 0) {
    return x * x
}
console.log(square(9))

// IIFEs
// function langsung dibaca error
(function (name) {
    console.log(`hello, ${name}`)
})('AAAAA')