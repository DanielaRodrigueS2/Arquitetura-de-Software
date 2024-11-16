// Função que retorna o preço total arredondado com duas casas
const arredondaPreco = (total) =>{
    return total.toFixed(2);
}

// Função responsável apenas por somar os o valor dos produtos e retornar seu valor
const calculaPrecoTotal = (products) =>{
    let total = 0
    for (let i = 0; i < products.length; i++) {
        total += products[i].price * products[i].quantity;
    }
    return total 
}

// Função responsável por decidir se o produto ira receber desconto ou ira ser taxada como base em seu preço
const calculaPrecoFinal = (total , discout, shippingCost) =>{
    if(total > 100) return total *= (1-discout)
    if(total < 50) return total += shippingCost
}

/* Extract Method:
    As linhas de calcular o preço baseado em seu valor (maior que 100 ou menor que 50) foram substituídas
    pela função calculaPrecoFinal que recebe as variáveis discout e shippingCost diretamente por parametro
    o que possibilita a alteração das variaveis de forma simples direto pela chamada da função
    o que permite támbem a reutilização do código

    Replace temp with query:
    A variável total foi implementada em outro método para simplificar seu calculo e entendimento
    A variável total irá existir apenas enquanto a função estiver sendo executada, o que economiza
    espaço na memória, bem como a função retorna diretamente o valor para ser reutilizada

    Outras alterações: 
    Implementação arrow function/alteração nome das funções:
    Facilitar o entendimento e propósito das funções, bem como melhora a aparência do código
*/

