
// Função responsável por calcular o desvio padrão e média chamando suas respectivas funções 
const calculaMediaDesvioPadrao = (valores) =>{
    media = calcularMedia(valores)
    desvioPadrao = calcularDesvioPadrao(valores, media)
    exibirResultados(media, desvioPadrao)
}

// Função reponsável por calcular média e retornar o valor arredondado
function calcularMedia(valores) {
    let soma = 0;
    for (let i = 0; i < valores.length; i++) {
        soma = soma + valores[i];
    }
    return arredondaPreco(soma / valores.length)
}


// Função responsável por calcular o desvio padrao e retornar seu valor arredondado
function calcularDesvioPadrao(valores, media) {
    let somaDiferencasQuadradas = 0;
    for (let i = 0; i < valores.length; i++) {
        somaDiferencasQuadradas += (valores[i] - media) ** 2;
    }
    return arredondaPreco(Math.sqrt(somaDiferencasQuadradas / valores.length))
}

// Função responsável por exibir os resultados obtidos 
const exibirResultados = (media, desvioPadrao) =>{
    console.log("Média: " + media);
    console.log("Desvio Padrão: " + desvioPadrao);
}

// Função responsável por arredondar o preço quando necessário
const arredondaPreco = (total) =>{
    return total.toFixed(2);
}

/*
    Extract Method:
    As linhas responsáveis por exibir os resultados foram agrupadas em uma função própria, bem como 
    recebem o resultado diretamente sem precisar chamar as funções, o que permite a reutilização 
    das linhas em outros locais, bem como facilita o entedimento ao receber diretamente as variáveis

    As linhas responsáveis por arredondar o valor foram substiuidas por uma função(arredondaPreco) 
    que recebe um valor e arredonda, facilitando o entedimento e possibilitando a sua reutilização

    Inline Method: 
    eliminação das váriaveis locais média e desvio padrão no interior das funções calcularMedia e 
    calcularDesvioPadrão o valor que era atribuído as variáveis foi inserido diretamente na chamada
    da função arredondaPreço, a eliminação das variáveis libera espaço na memória 

    Replace temp with query:
    A função calcular desvioPadrão agora recebe a média(já calculada anteriormente) ao invés de calcular
    seu valor em seu anterior o que retira uma chamada desnecessária da função e elimina uma variável
*/