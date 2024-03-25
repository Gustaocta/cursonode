const EventEmitter = require('events')

class Evento extends EventEmitter {}
const meuEvento = new Evento()

meuEvento.on('seguranca', (x,y)=>{
    console.log(`Executando o evento de 'seguranca': ${x} ${y}`)
})

meuEvento.emit('seguranca', 'UserAdmin', 'Alterou Salário')