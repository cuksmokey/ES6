// FOR
console.log(`F O R`)
for(let i = 0; i < 10; i++) {

    if(i === 2){
        console.log('fav 2')
        continue
    }

    if(i === 6){
        console.log('Stop looping')
        break
    }

    console.log(`Number - ${i}`)
}

//////////////////////////////////////////
console.log(`W H I L E`)

// WHILE
let ii = 0

while(ii < 10){
    console.log(`Number - ${ii}`)
    ii++
}

console.log(`D O - W H I L E`)
//////////////////////////////////////////

// DO WHIEL
let iii = 0

do{
    console.log(`Number - ${iii}`)
    iii++
}while(iii < 10)