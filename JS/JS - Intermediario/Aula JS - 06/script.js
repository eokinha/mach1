let calcularValorIr = (callbackMensagemDesconto) => {
    let salario = number(prompt('Digite seu salario'))

    let valorImposto = 0

    if (salario <= 1903.98) {
        valorImposto = 0
    } else if (salario <= 2826.65) {
        valorImposto = (salario * 0.075) - 142.80
    } else if (salario <= 3751.05) {
        valorImposto = (salario * 0.15) - 354.80
    } else if (salario <= 4664.68) {
        valorImposto = (salario * 0.225) - 636.13
    } else {
        valorImposto = (salario * 0.275) - 869.36
    }
    return callbackMensagemDesconto
}

function exibeMensagemDesconto(valorIr) {
    alert(`O valor descontado foi R$ ${valorIr.toFixed(2)}`)
}

calcularValorIr(exibeMensagemDesconto)