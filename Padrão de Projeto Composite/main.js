const Funcionario = require('./Funcionário')
const Departamento = require('./Departamento')

const organização = new Departamento("Organização")

const main = () => {

    // A organização é do tipo departamento, mas atua como pai de todos os componentes
    // A organização representa a empresa principal

    const organização = new Departamento("Organização")

    //Criando funcionários

    const func1 = new Funcionario('Daniela', 2000.50)
    const func2 = new Funcionario('Hanna', 3200.50)
    const func3 = new Funcionario('Daisy', 12000.75)
    const func4 = new Funcionario('Teste', 1000)

    //Criando departamentos

    const dep1 = new Departamento('Administração') 
    const dep2 = new Departamento('TI')
    const dep3 = new Departamento('Testes')

    //Adicionando Departamentos

    organização.adicionarComponente(dep1, "Organização"); 
    organização.adicionarComponente(dep2, "Organização");

    // Tentando inserir de forma recursiva
    organização.adicionarComponente(dep3, 'TI')

    //Adcionando os funcionarios

    dep1.adicionarComponente(func1, 'Administração')
    dep2.adicionarComponente(func2, 'TI')

    // Tentando adicionar de forma recursiva
    dep2.adicionarComponente(func3, 'Testes')
    organização.adicionarComponente(func4, 'Testes')
    
    // Exibindo estrutura da organização
    organização.exibir();

    // Calculando e exibindo o total de salários na organização
    console.log("Salário total da Organização:", organização.getSalarioDepartamento());

    // Removendo componente com recursividade
    organização.removerComponente('Teste')

    console.log('')
    organização.exibir();
}

main()