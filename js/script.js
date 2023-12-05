const alas = document.getElementById('input_panjang_alas')
const tinggi = document.getElementById('input_tinggi')
const hitung = document.getElementById('hitung')
const output = document.getElementById('output')
hitung.addEventListener('click', function () {
    let a = alas.value
    let t = tinggi.value
    let l = 0.5 * a * t
    output.innerHTML = `L = 1/2 x a x t <br> L = 1/2 x ${a} x ${t} <br> L = ${l} cm2`
})
