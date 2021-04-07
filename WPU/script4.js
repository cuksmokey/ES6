// dom selection

const box = document.querySelector('.box')
box.addEventListener('click', function() {
    // console.log(this);
    let satu = 'size';
    let dua = 'caption';

    if(this.classList.contains(satu)){
        [satu, dua] = [dua, satu];
    }

    // toogle > belum ada di tambah, sudah ada di hilangkan
    this.classList.toggle(satu)

    setTimeout(() => {
        this.classList.toggle(dua)
    }, 600)
})