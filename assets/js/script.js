let select = document.querySelector('#options')
function adc() {
    let select = document.querySelector('#options')
    let opcaoValor = select.options[select.selectedIndex].value
    
    const div = document.querySelector('.adc')
    const p = document.createElement('p')
    const img = document.createElement('img')

    if (opcaoValor === opcaoValor){
        select.options[select.selectedIndex].setAttribute('disabled', 'disabled')
    }

    img.src = './assets/img/x-icon.png'
    img.addEventListener('click', removerOpcao)

    p.innerHTML = `${opcaoValor}`
    div.appendChild(p)
    p.appendChild(img)
}

function removerOpcao(e){
    let opcaoClicada = e.target.parentNode
    
    if (opcaoClicada === opcaoClicada) {
        select.options[select.selectedIndex].disabled=false
    }
    
    opcaoClicada.remove()
}

