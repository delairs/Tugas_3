let angka1 = document.getElementById('angka1')
let angka2 = document.getElementById('angka2')
let hasil = document.getElementById('hasil')

function tambah(){
    hasil.value = parseInt(angka1.value) + parseInt(angka2.value)
}
function kurang(){
    hasil.value = parseInt(angka1.value) - parseInt(angka2.value)
}
function kali(){
    hasil.value = parseInt(angka1.value) * parseInt(angka2.value)
}
function bagi(){
    if(angka2.value == 0){ 
        hasil.value = "UNDIFINED"
    } else {
        hasil.value = parseInt(angka1.value) / parseInt(angka2.value)
    }
}

