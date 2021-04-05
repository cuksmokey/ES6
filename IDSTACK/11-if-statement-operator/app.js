// if (true) {
//     do something()
// } else {
//     do something()
// }

let id = 100

if(typeof id != 'undefined') {
    console.log(`ID Value is: ${id}`)
}else{
    console.log(`ID Value is undefined`)
}

const name = 'Alpha'
const age = 20

if(age > 0 && age < 12) {
    console.log(`${name} is a child`)
}else if(age >= 12 && age <= 19){
    console.log(`${name} is a teenager`)
}else{
    console.log(`${name} is an adult`)
}