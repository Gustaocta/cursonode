console.log('Exibindo uma mensagem no console')

//erro

console.error(new Error('Exibindo mensagem de erro, temos problemas!'))

//tabela

//array
const carros = ['GM', 'FIAT', 'FORD', 'VW', 'Renault', 'Honda', 'Hyundai']

console.table(carros)

//objeto
const dados = {name:'Gustavo Otacílio', empresa:'Grupo Tecnoset'}

console.table(dados)

//count
console.count('processo')
console.count('processo')
console.count('processo')

console.log('Resetando processo')
console.countReset('processo')

console.count('processo')

//time
console.time('contador')
for (let index = 0; index < 100; index++) {
    // console.log('-')
    
}

console.timeEnd('contador')

//assert
console.assert(true, 'Faça alguma coisa')
console.assert(false, 'Ih Rapaz! %s, que pena!', 'Não funcionou')

//clear
// console.clear()