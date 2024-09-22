function sortear(){
    let quantidade = document.getElementById('quantidade').value;
    let deNumero = document.getElementById('de').value;
    let ateNumero = document.getElementById('ate').value;

    if (quantidade === '' || deNumero === '' || ateNumero === ''){
        alert('preencha todos os campos por favor!');
    }
    quantidade = parseInt(quantidade);
    deNumero = parseInt(deNumero);
    ateNumero = parseInt(ateNumero);

    if(deNumero >= ateNumero) {
        alert(`o Número ${ateNumero} é menor que ${deNumero} verifique seu pedido`);
        reiniciar();
        return;
    }

    

    if (quantidade > (ateNumero - deNumero + 1)){
        alert(`apenas ${ateNumero - deNumero + 1} números podem ser sorteados!`);
        reiniciar();
        return;
    }

    let sorteados = [];

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(deNumero, ateNumero, quantidade);
    
        while (sorteados.includes(numero)){
            numero = obterNumeroAleatorio(deNumero, ateNumero, quantidade);
        }
    
        sorteados.push(numero);
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
    alterarStatusBotao();
    reiniciar();
    }

function obterNumeroAleatorio(min, max, quantidade){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
        if(botao.classList.contains('container__botao-desabilitado')) {
            botao.classList.remove('container__botao-desabilitado');
            botao.classList.add('container__botao');

        } else {
            botao.classList.remove('container__botao');
            botao.classList.add('container__botao-desabilitado');
        }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}