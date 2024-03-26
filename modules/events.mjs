import { EventEmitter } from 'events'

class Evento extends EventEmitter {}
const meuEvento = new Evento()

//subscriber - assinante
meuEvento.on('seguranca', (x,y)=>{
    console.log(`Executando o evento de 'seguranca': ${x} ${y}`)
})

//publisher - emissor
meuEvento.emit('seguranca', 'UserAdmin', 'Alterou Salário')

meuEvento.on('encerrar', (dados)=>{
    console.log('Assinante ' + dados)
})

meuEvento.emit('encerrar', 'Encerrando a execução da importção dos dados!')