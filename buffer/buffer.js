const Buffer = require('buffer').Buffer

const buf = Buffer.from('Curso completo de NodeJS')

console.log(buf.toString())
console.log(buf.toString('utf-16le'));

const buf_string = Buffer.from('Carregando uma String', 'utf-8')

console.log(Buffer.isBuffer(buf_string))
console.log(buf_string.toString('utf-8', 0, 10))