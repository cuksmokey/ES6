// Rest parameter

function myFunc(...myArgs) { //...myArgs
    return myArgs
    // return arguments
    // return [...arguments]
}

console.log(myFunc(1,2,3,4,5))

//

function jumlahkan(...angka) {
    return angka.reduce((ac, cv) => ac + cv)
}

console.log(jumlahkan(1,2,3,4,5))

// array destrcuturing rest parameter
const kelompok1 = ['wisnu', 'adi', 'nugraha', 'suzy', 'kimsohyun', 'saeron', 'goeun']
const [ketua, wakil, ...anggota] = kelompok1
console.log(anggota)

// Object destructuring rest parameter
const team = {
    pm: 'Wisnu',
    frontEnd: 'Adi',
    backEnd: 'Nugraha',
    ux: 'Suzy',
    devOps: 'Ferry'
}

const {pm, ...myTeam} = team
console.log(myTeam)

//

// filtering
function filterBy(type, ...values) {
    return values.filter(v => typeof v === type)
}

console.log(filterBy('number', 1, 2, 'wisnu', false, 10, true, 'nugraha'))