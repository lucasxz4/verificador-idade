let form = document.getElementById('formulario')
form.addEventListener('submit', (event) => {
    event.preventDefault()
})

let nasc = document.querySelector('#iano')
let anoAtual = new Date().getFullYear() //ANO ATTAL
let sexo = document.getElementsByName('sexo')
let btn = document.getElementsByClassName('verif')[0]
let resultado = document.querySelector('.parag')
let foto = document.createElement('img')
foto.style.margin = '30px 0px'
foto.style.borderRadius = '360px'
btn.addEventListener('click', function () {
    let ano = Number(nasc.value) //ANO DO NASCIMENTO
    let idade = anoAtual - ano //IDADE
    if (sexo[0].checked) /*OU SEJA, SE O PRIMEIRO RADIO FOR MARCADO, ENTÃO...*/ {
        resultado.innerHTML = `<p>Identificamos um homem que tem ou vai fazer ${idade} anos</p>`
        if (idade > 0 && idade <= 12) {
            foto.setAttribute('src', 'crianca-homem.jpg')
            resultado.appendChild(foto)
        } else if (idade <= 21) {
            foto.setAttribute('src', 'homem-jovem.jpg')
            resultado.appendChild(foto)
        } else if (idade < 62) {
            foto.setAttribute('src', 'homem-adu.jpg')
            resultado.appendChild(foto)
        } else if (idade < 150) {
            foto.setAttribute('src', 'idoso-masc.jpg')
            resultado.appendChild(foto)
        } else if (idade > 150) {
            foto.setAttribute('src', 'morte.jpg')
            resultado.appendChild(foto)
        }
    } else if (sexo[1].checked) {
        resultado.innerHTML = `<p>Identificamos uma mulher que tem ou vai fazer ${idade} anos</p>`
        if (idade > 0 && idade <= 12) {
            foto.setAttribute('src', 'crianca-mulher.jpg')
            resultado.appendChild(foto)
        } else if (idade <= 21) {
            foto.setAttribute('src', 'mulher-jovem.jpg')
            resultado.appendChild(foto)
        } else if (idade < 62) {
            foto.setAttribute('src', 'mulher-adu.jpg')
            resultado.appendChild(foto)
        } else if (idade < 150) {
            foto.setAttribute('src', 'idosa-fem.jpg')
            resultado.appendChild(foto)
        } else if (idade > 150) {
            foto.setAttribute('src', 'morte.jpg')
            resultado.appendChild(foto)
        }
    }
})