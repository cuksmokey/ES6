const color = 'blue'

switch (color) {
    case 'red':
        console.log('red')
        break;
    case 'yellow':
        console.log('yellow')
        break;
    case 'blue':
        console.log('blue')
        break;

    default:
        console.log('not')
        break;
}

let day

switch (new Date().getDay()) {
    case 0:
        day = 'Sunday' // minggu
        break;
    case 1:
        day = 'Monday' // senin
        break;
    case 2:
        day = 'Tuesday' // selasa
        break;
    case 3:
        day = 'Wednesday' // rabu
        break;
    case 4:
        day = 'Thursday' // kamis
        break;
    case 5:
        day = 'Friday' // jumat
        break;
    case 6:
        day = 'Saturday' // sabtu
        break;
}

console.log(day)