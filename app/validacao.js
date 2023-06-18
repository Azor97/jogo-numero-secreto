function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div> Valor inválido </div>'
        console.error('valor invalido')
    }
    if (numeroForMaiorOuMenorQueOVAlorPermitido(numero)) {
        elementoChute.innerHTML += '<div> Valor inválido: o numero precisa estar entre 1 e 100 </div>'
        console.error("Valor invalido: o numero precisa estar entre 1 e 100")
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2 class="acerto">Voce acertou!</h2>
        <h3>O numero secreto era ${numeroSecreto}</h3>

        <button id="jogarNovamente" class="btn-jogar"> Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        document.body.innerHTML = `
        <h2 class="erro">Voce Errou!</h2>
        <div>O numero secreto e menor <i class="fa-solid fa-arrow-down"></i></div>
        <h3><div>O numero secreto esta entre ${numeroSecreto - Math.floor(Math.random() * 10 + 10)} e ${numeroSecreto + Math.floor(Math.random() * 10 + 10)}</div></h3>`
    } else {
        document.body.innerHTML = `
        <h2 class="erro">Voce Errou!</h2>
        <div>O numero secreto e maior <i class="fa-solid fa-arrow-up"></i></div>
        <h3><div>O numero secreto esta entre ${numeroSecreto - Math.floor(Math.random() * 10 + 10)} e ${numeroSecreto + Math.floor(Math.random() * 10 + 10)}</div></h3>`
    }
}

function numeroForMaiorOuMenorQueOVAlorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

document.body.addEventListener('click', e => {
    if (e.target.id === 'jogarNovamente') {
        location.reload()
    }
})