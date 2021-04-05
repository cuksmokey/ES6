const person = {
    firstName: 'Steve',
    lastName: 'Job',
    age: 24,
    email: 'steve@job.com',
    hobbies: ['music', 'sport'],
    address: {
        city: 'Arizona',
        zipcode: 151521
    },
    getBirthYear: function(){
        return 2021 - this.age
    }
}

let val

val = person
val = person.firstName
val = person['firstName']
val = person.hobbies
val = person.hobbies[0]
val = person.address
val = person.address.zipcode
val = person.address['city']
val = person.getBirthYear()

console.log(val)