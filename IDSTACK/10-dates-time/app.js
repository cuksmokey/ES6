const today = new Date()
let birthday = new Date()

birthday = new Date('Augustus 17 1945')
birthday = new Date('8/17/1945')

let val

val = today.toString()

val = today.getFullYear() // tahun
val = today.getMonth() // bulan ( array )
val = today.getDate() // tanggal
val = today.getHours() // jam
val = today.getMinutes() // menit
val = today.getSeconds() // detik
val = today.getMilliseconds()
val = today.getTime()

birthday.setDate(4) // atur tanggal
birthday.setMonth(6) // atur bulan ( array )
birthday.setFullYear(1997) // atur tahun
birthday.setHours(12)
birthday.setMinutes(30)
birthday.setSeconds(50)

console.log(birthday)