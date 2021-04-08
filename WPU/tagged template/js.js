// highlight
const nama = 'Wisnu Adi Nugraha'
const umur = 33

// menampung semua expression di template literal > ...namaValues
function highlight(string, ...val){
    return string.reduce((res, str, i) => `${res}${str} <span class="hl">${val[i] || ''}</span>`, '')
}

const str = highlight`Halo ${nama}, umur ${umur} tahun.`

document.body.innerHTML = str