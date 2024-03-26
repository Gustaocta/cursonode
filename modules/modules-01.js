console.log('Executando modules-01.js')

const oculta = ()=>{
    console.log('Executando função oculta')
}

const executa = ()=>{
    console.log('Executando a função executa')
}

const welcome = 'bem-vindo ao módulo modules-01.js'


module.exports = { executa, welcome, oculta }

//REPL