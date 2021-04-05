// FOR > data awal ke akhir
const cars = ['Honda', 'Toyota', 'Suzuki', 'Daihatsu', 'Ford']
for(let i = 0; i < cars.length; i++){
    console.log(`${[i]} - ${cars[i]}`);
}

// FOREACH
cars.forEach(function(r, i, a) { // (variabel/isi, index, array)
    console.log(`${i} - ${r}`);
    console.log(a);
})

// MAP object
const users = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Bella'},
    {id: 3, name: 'Carl'},
    {id: 4, name: 'Daniel'},
]

const ids = users.map(function(user) {
    return user.id
})

console.log(ids);

// for > cari key dan value
const user = {
    firstName: 'Alex',
    lastName: 'Gordon',
    age: 20
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}