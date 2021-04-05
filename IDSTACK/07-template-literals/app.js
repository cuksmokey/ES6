const nama = 'Hakim'
const age = 24
const job = 'Web Developer'
const city = 'Solo'

let html

// Without Template String ( ES5 )
html  = '<ul>' +
            '<li>Name: ' + nama + '</li>' +
            '<li>Age: ' + age + '</li>' +
            '<li>Job: ' + job + '</li>' +
            '<li>City: ' + city + '</li>' +
        '</ul>'

function hello(){
    return 'Hello Guyss'
}

// With Template String ( ES6 )
html = `
    <ul>
        <li>Name: ${nama}</li>
        <li>Name: ${age}</li>
        <li>Name: ${job}</li>
        <li>Name: ${city}</li>
        <li>${5+5}</li>
        <li>${hello()}</li>
        <li>${age > 20 ? 'Over 20' : 'Under 20'}</li>
    </ul>
`

document.body.innerHTML = html