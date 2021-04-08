// ambil semua elemen video
// const videos = document.querySelectorAll('[data-duration]')
// ubah ke array
const videos = Array.from(document.querySelectorAll('[data-duration]'))

// pakai method chaining
// pilih hanya js lan
let jsLanjut = videos.filter(video => video.textContent.includes('JS LAN'))
// ambil durasi masing2 video dari "data-duration"
.map(item => item.dataset.duration)
// ubah durasi menjadi int, ubah menit ke detik
.map(waktu => {
    // split
    const parts = waktu.split(':')
    // ubah string ke int
    .map(part => parseInt(part))
    return (parts[0] * 60) + parts[1]
})
// jumlahkan semua detik
.reduce((total, detik) => total + detik);

// ubah format jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600)
jsLanjut = jsLanjut - jam * 3600
const menit = Math.floor(jsLanjut / 60)
const detik = jsLanjut - menit * 60

// simpan di dom
const pDurasi = document.querySelector('.tot-dr')
pDurasi.textContent = `${jam} Jam, ${menit} menit, ${detik} Detik.`

const jmlVideo = videos.filter(video => video.textContent.includes('JS LAN')).length
const pJmlVideo = document.querySelector('.jml-vd')
pJmlVideo.textContent = `${jmlVideo} Videos.`


// console.log(detik);